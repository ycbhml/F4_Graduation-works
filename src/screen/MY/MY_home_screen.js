import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const MyScreen = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

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
                        console.log("Data updating");
                        if (data.status === 'success') {
                            console.log(`Updated info for ${user.name}:`, data.summoner_info);
                            return {
                                ...user,
                                summonerLevel: data.summoner_info.summonerLevel,
                                profileIconId: data.summoner_info.profileIconId,
                                puuid: data.summoner_info.puuid
                            };
                        } else {
                            console.error(`Failed to update user: ${user.name}`);
                            return user;
                        }
                    } catch (error) {
                        console.error(`Error fetching updated info for user: ${user.name}`, error);
                        return user;
                    }
                }));

                setUsers(updatedUsers);
                await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));
                console.log('Users updated and set successfully:', updatedUsers);
            }
        } catch (error) {
            console.error('Failed to load users:', error);
        } finally {
            setLoading(false);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            console.log("Screen focused, loading users");
            loadUsers(); // 每次界面进入时调用 loadUsers
        }, [])
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.summonerLevel}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MyScreen;
