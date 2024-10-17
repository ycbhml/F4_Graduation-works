import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Image, Text, Button, Alert } from 'react-native';
import RNFS from 'react-native-fs';
import { fetchAndSaveFilteredMatches } from '../../../tools/get_match_info_jsons'; // 导入 fetchAndSaveFilteredMatches 函数
import { heroImageMap } from '../../components/LOL/heroImageMap'; // 导入英雄图片静态映射
import MatchCard from './MatchCard'; // 导入 MatchCard 组件
import { HERO_DATA } from '../../components/LOL/LOL_hero_icons'; // 确保英雄数据已正确导入

const MatchDetail = ({ route, navigation }) => { // 传入 navigation prop
    const { user } = route.params; // 获取传递的用户信息
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 页面初始化时，调用 fetchAndSaveFilteredMatches 获取比赛数据
        fetchMatchData();
    }, []);

    const fetchMatchData = async () => {
        const folderPath = `${RNFS.DocumentDirectoryPath}/${user.puuid}`;
        try {
            // 检查并获取比赛数据
            await fetchAndSaveFilteredMatches(user.puuid, user.name, 20); // 调用获取比赛数据的函数
            
            // 读取文件夹中的比赛数据
            const files = await RNFS.readDir(folderPath);
            const matchDetails = [];
            for (const file of files) {
                const fileContent = await RNFS.readFile(file.path, 'utf8');
                const parsedContent = JSON.parse(fileContent);
                matchDetails.push(parsedContent);
            }
            console.log("filefod", folderPath);
            setMatches(matchDetails);
        } catch (error) {
            console.error('Error fetching or reading match data:', error);
        }
        setLoading(false);
    };

    const updateMatches = async () => {
        try {
            const folderPath = `${RNFS.DocumentDirectoryPath}/${user.puuid}`;
            const currentFiles = await RNFS.readDir(folderPath);
            const currentMatchIds = currentFiles.map(file => file.name.split('_')[0]);

            // 获取新比赛数据
            await fetchAndSaveFilteredMatches(user.puuid, user.name, 100); // 假设每次更新拉取100场

            // 读取文件夹中的比赛数据，过滤本地已存在的比赛ID
            const updatedFiles = await RNFS.readDir(folderPath);
            const newMatches = [];
            for (const file of updatedFiles) {
                const matchId = file.name.split('_')[0];
                if (!currentMatchIds.includes(matchId)) {
                    const fileContent = await RNFS.readFile(file.path, 'utf8');
                    const parsedContent = JSON.parse(fileContent);
                    newMatches.push(parsedContent);
                }
            }

            // 更新本地数据，添加新比赛数据
            setMatches([...matches, ...newMatches]);
            Alert.alert('提示', '战绩更新成功');
        } catch (error) {
            console.error('Error updating match data:', error);
            Alert.alert('错误', '更新战绩时发生错误');
        }
    };

    // 渲染 MatchCard 组件
    const renderMatchCard = ({ item }) => {
        const matchSummary = item.match_summary;
        const winLose = matchSummary.win ? 'Win' : 'Lose';
        const stats = `${matchSummary.kills}/${matchSummary.deaths}/${matchSummary.assists}`;
        const gameMode = matchSummary.mapId;
        const matchId = matchSummary.matchId;
        console.log("matchid",matchId);
        const championKey = matchSummary.champion;
        const championName = matchSummary.championName;
        const heroData = HERO_DATA.find(hero => hero.Key === String(championKey)); // 确保 championKey 是字符串
        
        console.log('name',championName);
        const imageUrl = `http://3.35.209.179:8000/data/get-hero-icon/${championName}.png`; // 根据 championName 拼接 API URL
    
      
        const time = new Date(matchSummary.gameStartTimestamp).toLocaleString();
    
        return (
            <MatchCard
                championName={championName}
                winLose={winLose}
                stats={stats}
                gameMode={gameMode}
                time={time}
                onPress={() => {
                    navigation.navigate('MatchDetailPage', { matchSummary }); // 传递 matchSummary 数据
                    console.log("matchSummary",matchSummary);
                }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: `http://ddragon.leagueoflegends.com/cdn/11.15.1/img/profileicon/${user.profileIconId}.png` }}
                    style={styles.profileIcon}
                />
                <Text style={styles.nameTag}>{user.name}#{user.tag}</Text>
                <Text style={styles.level}>Level: {user.summonerLevel}</Text>
            </View>

            {/* 添加更新按钮 */}
            <Button title="更新战绩" onPress={updateMatches} />

            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={matches}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderMatchCard}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileIcon: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    nameTag: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    level: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
});

export default MatchDetail;
