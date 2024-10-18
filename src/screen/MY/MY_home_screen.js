import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; 
import MatchDetail from './MatchDetail';  
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import MatchDetailPage from './MatchDetailPage';
import { getVersion, version_check } from '../../../tools/get_match_info_jsons';
const Stack = createStackNavigator();

const MyScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [tagLine, setTagLine] = useState('');
    const [users, setUsers] = useState([]);
    const [version, setVersion] = useState('')

    //version获取
    useEffect(() => {
        // 在组件加载时调用 version_check 函数
        const fetchVersion = async () => {
            try {
                const data = await version_check(); // 调用 version_check 函数
                if (data && data.version) {
                    setVersion(data.version); // 直接存储版本号
                }
            } catch (error) {
                console.error('Error fetching version:', error);
            }
        };

        fetchVersion();
    }, []); // 仅在组件挂载时调用

    console.log("version for MY HOME",version);
    // 调用获取 JSON 数据
    
    // 加载存储的用户信息
    const loadUsers = async () => {
        try {
            const storedUsers = await AsyncStorage.getItem('users');
            if (storedUsers) {
                setUsers(JSON.parse(storedUsers));
            }
        } catch (error) {
            console.error('Failed to load users:', error);
        }
    };

    // 存储用户信息
    const storeUsers = async (usersToStore) => {
        try {
            await AsyncStorage.setItem('users', JSON.stringify(usersToStore));
        } catch (error) {
            console.error('Failed to save users:', error);
        }
    };

    useEffect(() => {
        loadUsers(); // 组件挂载时加载用户信息
    }, []);

    // 搜索召唤师
    const fetchSummonerInfo = async () => {
        if (users.length >= 3) {
            Alert.alert('提示', '最多只能添加三个用户，请删除至少一个用户再操作。');
            return;
        }

        if (!searchQuery || !tagLine) {
            alert('请输入召唤师姓名和tag');
            return;
        }

        const userExists = users.some(user => user.name === searchQuery && user.tag === tagLine);
        if (userExists) {
            Alert.alert('提示', '该用户已经在队列中。');
            return;
        }

        try {
            const response = await fetch(`http://3.35.209.179:8000/api/summoner-info/${searchQuery}/${tagLine}/`);
            const data = await response.json();

            if (data.status === 'success') {
                const newUser = {
                    name: searchQuery,
                    tag: tagLine,
                    summonerLevel: data.summoner_info.summonerLevel,
                    profileIconId: data.summoner_info.profileIconId,
                    puuid: data.summoner_info.puuid
                };
                const updatedUsers = [...users, newUser];
                setUsers(updatedUsers); // 更新用户列表
                storeUsers(updatedUsers); // 存储用户信息
            } else {
                alert('未找到该召唤师');
            }
        } catch (error) {
            console.error(error);
            alert('获取数据时出错');
        }
    };

    // 删除用户
    const removeUser = (index) => {
        const newUsers = [...users];
        newUsers.splice(index, 1);
        setUsers(newUsers);
        storeUsers(newUsers); // 更新存储的用户信息
    };

    // 跳转到 MatchDetail 页面
    const goToMatchDetail = async (user) => {
        const folderPath = `${RNFS.DocumentDirectoryPath}/${user.puuid}`;
    
        try {
            const folderExists = await RNFS.exists(folderPath);
    
            if (!folderExists) {
                await RNFS.mkdir(folderPath);
                console.log(`文件夹已创建: ${folderPath}`);
            } else {
                console.log(`文件夹已存在: ${folderPath}`);
            }
    
            navigation.navigate('MatchDetail', { user });
    
        } catch (error) {
            console.error('创建文件夹时发生错误:', error);
            alert('创建文件夹时发生错误');
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
                <Text>等级: {item.summonerLevel}</Text>
            </View>
            <TouchableOpacity onPress={() => removeUser(index)} style={styles.removeButton}>
                <Text>X</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="召唤师姓名"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <TextInput
                style={styles.input}
                placeholder="tag"
                value={tagLine}
                onChangeText={setTagLine}
            />
            <Button title="搜索" onPress={fetchSummonerInfo} />

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
                options={{ headerShown: false }} // 隐藏头部导航
            />
            <Stack.Screen
                name="MatchDetail"
                component={MatchDetail}
                options={{ headerShown: false }} // 隐藏头部导航
            />
            <Stack.Screen
                name="MatchDetailPage" // 新增 MatchDetailPage
                component={MatchDetailPage}
                options={{ headerShown: true }} // 根据需要决定是否显示头部导航
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
});

export default MY_home_screen;
