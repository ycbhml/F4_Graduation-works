import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs';
import { createStackNavigator } from '@react-navigation/stack';
import MatchDetail from './MatchDetail';
import MatchDetailPage from './MatchDetailPage';
import { getVersion, version_check } from '../../../tools/get_match_info_jsons';
import { useFocusEffect } from '@react-navigation/native'; // 引入 useFocusEffect
const Stack = createStackNavigator();

const MyScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [tagLine, setTagLine] = useState('');
    const [users, setUsers] = useState([]);
    const [version, setVersion] = useState('');
    const [loading, setLoading] = useState(true);  // 用来控制数据加载前不渲染用户信息


    const fetchVersion = async () => {
        try {
            const data = await version_check();
            if (data && data.version) {
                setVersion(data.version);
                console.log('Version fetched:', data.version);
            }
        } catch (error) {
            console.error('Error fetching version:', error);
        }
    };

    // 在进入界面时无条件刷新用户数据，并覆盖现有数据
    const loadUsers = async () => {
        try {
            const storedUsers = await AsyncStorage.getItem('users');
            if (storedUsers) {
                const parsedUsers = JSON.parse(storedUsers);
                console.log('Loaded users from storage:', parsedUsers);  // 打印加载的用户数据

                // 更新用户数据，确保最新
                const updatedUsers = await Promise.all(parsedUsers.map(async (user) => {
                    try {
                        const response = await fetch(`http://3.35.209.179:8000/api/summoner-info/${user.name}/${user.tag}/`);
                        const data = await response.json();

                        if (data.status === 'success') {
                            console.log(`Updated info for ${user.name}:`, data.summoner_info);
                            return {
                                ...user, // 保留用户原有的信息
                                summonerLevel: data.summoner_info.summonerLevel, // 更新等级
                                profileIconId: data.summoner_info.profileIconId, // 更新图标
                                puuid: data.summoner_info.puuid // 更新 puuid
                            };
                        } else {
                            console.error(`Failed to update user: ${user.name}`);
                            return user; // 如果更新失败，返回旧数据
                        }
                    } catch (error) {
                        console.error(`Error fetching updated info for user: ${user.name}`, error);
                        return user; // 出现错误时返回旧数据
                    }
                }));

                // 将更新后的用户数据保存到状态中
                setUsers(updatedUsers);
                await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));  // 更新本地存储的数据
                console.log('Users updated and set successfully:', updatedUsers);
            }
        } catch (error) {
            console.error('Failed to load users:', error);
        } finally {
            setLoading(false);  // 确保数据加载和更新完成后停止 loading
        }
    };

    // 使用 useFocusEffect 来确保每次进入页面时数据都会被刷新
    useFocusEffect(
        useCallback(() => {
            console.log("Screen focused, loading users");
            fetchVersion();  // 获取版本信息
            loadUsers();     // 加载和刷新用户信息
        }, [])  // 空依赖数组，表示每次页面获得焦点时执行
    );


    // 搜索召唤师
    const fetchSummonerInfo = async () => {
        if (users.length >= 3) {
            Alert.alert('매시지', '사용자 최대 3명만 존재할 수 있습니다。');
            return;
        }

        if (!searchQuery || !tagLine) {
            alert('name,tag 입력해주세요');
            return;
        }

        const userExists = users.some(user => user.name === searchQuery && user.tag === tagLine);
        if (userExists) {
            Alert.alert('매시지', '사용자 존재합니다');
            return;
        }

        try {
            console.log(`Searching for summoner: ${searchQuery}#${tagLine}`);
            const response = await fetch(`http://3.35.209.179:8000/api/summoner-info/${searchQuery}/${tagLine}/`);
            const data = await response.json();

            if (data.status === 'success') {
                console.log('Summoner found:', data.summoner_info);
                const newUser = {
                    name: searchQuery,
                    tag: tagLine,
                    summonerLevel: data.summoner_info.summonerLevel,
                    profileIconId: data.summoner_info.profileIconId,
                    puuid: data.summoner_info.puuid
                };
                const updatedUsers = [...users, newUser];
                setUsers(updatedUsers);
                await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));  // 更新本地存储
            } else {
                alert('소환사 찾을 수 없습니다。');
            }
        } catch (error) {
            console.error(error);
            alert('데이터 오류。');
        }
    };

    // 删除用户并删除用户文件夹
    const removeUser = async (index) => {
        const userToRemove = users[index];
        const folderPath = `${RNFS.DocumentDirectoryPath}/${userToRemove.puuid}`;

        try {
            const folderExists = await RNFS.exists(folderPath);
            if (folderExists) {
                await RNFS.unlink(folderPath);
                console.log(`Folder deleted for user: ${userToRemove.name} at path: ${folderPath}`);
            } else {
                console.log(`Folder does not exist for user: ${userToRemove.name}`);
            }
        } catch (error) {
            console.error('Error deleting folder:', error);
            alert('풀더 삭제시 오류 발생했습니다。');
        }

        const newUsers = [...users];
        newUsers.splice(index, 1);
        setUsers(newUsers);
        await AsyncStorage.setItem('users', JSON.stringify(newUsers));  // 更新本地存储
    };

    // 跳转到 MatchDetail 页面
    const goToMatchDetail = async (user) => {
        const folderPath = `${RNFS.DocumentDirectoryPath}/${user.puuid}`;

        try {
            const folderExists = await RNFS.exists(folderPath);

            if (!folderExists) {
                await RNFS.mkdir(folderPath);
                console.log(`Folder created for user: ${user.name} at path: ${folderPath}`);
            } else {
                console.log(`Folder already exists for user: ${user.name}`);
            }

            navigation.navigate('MatchDetail', { user });

        } catch (error) {
            console.error('Error creating folder:', error);
            alert('풀더 생성시 오류 발생했습니다');
        }
    };

    const renderUser = ({ item, index }) => (
        <TouchableOpacity onPress={() => goToMatchDetail(item)} style={styles.userItem}>
            <Image
                source={{ uri: `http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${item.profileIconId}.png` }}
                style={styles.profileIcon}
            />
            <View style={styles.userInfo}>
                <Text>{item.name}#{item.tag}</Text>
                <Text>Levle: {item.summonerLevel}</Text>
            </View>
            <TouchableOpacity onPress={() => removeUser(index)} style={styles.removeButton}>
                <Text>X</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    // 数据未加载完成前，显示加载指示器
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    // 数据加载完成后，渲染用户信息
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="name"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <TextInput
                style={styles.input}
                placeholder="tag"
                value={tagLine}
                onChangeText={setTagLine}
            />
            <Button title="검색" onPress={fetchSummonerInfo} />

            <FlatList
                data={users}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderUser}
            />
        </View>
    );
};

const MY_home_screen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={MyScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MatchDetail"
                component={MatchDetail}
                options={{ title: '대전 기록' }}
            />
            <Stack.Screen
                name="MatchDetailPage"
                component={MatchDetailPage}
                options={{ title: '상세정보' }}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    userItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 5,
    },
    profileIcon: {
        width: 50,
        height: 50,
    },
    userInfo: {
        flex: 1,
        marginLeft: 10,
    },
    removeButton: {
        padding: 5,
        marginRight: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MY_home_screen;
