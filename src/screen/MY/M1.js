import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Image, Text } from 'react-native';
import RNFS from 'react-native-fs';
import { fetchAndSaveFilteredMatches } from '../../../tools/get_match_info_jsons'; // 导入 fetchAndSaveFilteredMatches 函数
import { heroImageMap } from '../../components/LOL/heroImageMap'; // 导入英雄图片静态映射
import MatchCard from './MatchCard'; // 导入 MatchCard 组件
import { HERO_DATA } from '../../components/LOL/LOL_hero_icons'; // 确保英雄数据已正确导入

const MatchDetail = ({ route }) => {
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
            setMatches(matchDetails);
        } catch (error) {
            console.error('Error fetching or reading match data:', error);
        }
        setLoading(false);
    };

    // 渲染 MatchCard 组件
    const renderMatchCard = ({ item }) => {
        const matchSummary = item.match_summary;
        const winLose = matchSummary.win ? 'Win' : 'Lose';
        const stats = `${matchSummary.kills}/${matchSummary.deaths}/${matchSummary.assists}`;
        const gameMode = matchSummary.gameMode;
    
        const championKey = matchSummary.champion;
        const heroData = HERO_DATA.find(hero => hero.Key === String(championKey)); // 确保 championKey 是字符串
    
        let finalImageUrl = require('../../assets/lol_hero_icons/default.png'); // 默认图片路径
    
        if (heroData) {
            const cleanedChampionId = heroData.id.split('_')[0].trim(); // 去除下划线及其后面的内容
    
            // 获取对应的图片
            finalImageUrl = heroImageMap[cleanedChampionId] || finalImageUrl; // 如果没有找到图片，使用默认图片
        }
    
        //console.log(`Champion: ${cleanedChampionId}, Image URL: ${finalImageUrl}`); // 调试信息
    
        const time = new Date(matchSummary.gameStartTimestamp).toLocaleString();
    
        return (
            <MatchCard
                imageUrl={finalImageUrl}
                winLose={winLose}
                stats={stats}
                gameMode={gameMode}
                time={time}
                onPress={() => {
                    console.log('Match clicked!');
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
                <Text style={styles.level}>等级: {user.summonerLevel}</Text>
            </View>

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
