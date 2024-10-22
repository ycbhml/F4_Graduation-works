import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Image, Text } from 'react-native';
import { fetchAndSaveFilteredMatchesLazy, loadMatchesFromLocal } from '../../../tools/get_match_info_jsons'; 
import MatchCard from './MatchCard'; 
import { HERO_DATA } from '../../components/LOL/LOL_hero_icons'; 
import { useVersion } from '../../VersionContext';
import RNFS from 'react-native-fs';

const MatchDetail = ({ route, navigation }) => { 
    const { user } = route.params; 
    const [matches, setMatches] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [startIndex, setStartIndex] = useState(0); 
    const [isFetchingMore, setIsFetchingMore] = useState(false); 
    const [allDataLoaded, setAllDataLoaded] = useState(false); 

    const version = useVersion();

    useEffect(() => {
        fetchInitialMatches();
    }, []);
    const gameModeName = (gameMode) => {
        switch(gameMode) {
            case 11:
                return "소환사의 협곡"; // 召唤师峡谷
            case 12:
                return "칼바람 나락"; // 极地大乱斗
            default:
                return "기타"; // 其他
        }
    };
    const fetchInitialMatches = async () => {
        setLoading(true);
        const folderPath = `${RNFS.DocumentDirectoryPath}/${user.puuid}`;
        try {
            const localMatches = await loadMatchesFromLocal(folderPath);
            setMatches(localMatches);
            const newMatches = await fetchAndSaveFilteredMatchesLazy(user.puuid, user.name, 0, 5);
            if (newMatches.length > 0) {
                setMatches([...localMatches, ...newMatches]);
            }
            setStartIndex(5); 
        } catch (error) {
            console.error('Error fetching initial match data:', error);
        }
        setLoading(false);
    };

    const fetchMoreMatches = async () => {
        if (isFetchingMore || allDataLoaded) return; 
        setIsFetchingMore(true);
        try {
            const newMatches = await fetchAndSaveFilteredMatchesLazy(user.puuid, user.name, startIndex, 5);
            if (newMatches.length === 0) {
                setAllDataLoaded(true); 
            } else {
                setMatches(prevMatches => [...prevMatches, ...newMatches]);
                setStartIndex(prevIndex => prevIndex + 5); 
            }
        } catch (error) {
            console.error('Error fetching more match data:', error);
        }
        setIsFetchingMore(false);
    };

    const renderMatchCard = ({ item }) => {
        const matchSummary = item.match_summary;
        const winLose = matchSummary.win ? '승리' : '패배';
        const stats = `${matchSummary.kills}/${matchSummary.deaths}/${matchSummary.assists}`;
        const gameMode = matchSummary.mapId;
        const matchId = matchSummary.matchId;
        const championKey = matchSummary.champion;
        const championName = matchSummary.championName;
    // 只显示 mapId 为 11 或 12 的比赛
        if (matchSummary.mapId !== 11 && matchSummary.mapId !== 12) {
            return null; // 跳过显示其他 mapId 的比赛
        }

        const imageUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championName}.png`;

        const time = new Date(matchSummary.gameStartTimestamp).toLocaleString();

        return (
            <MatchCard
                championName={championName}
                version={version}
                winLose={winLose}
                stats={stats}
                gameMode={gameModeName(gameMode)}
                time={time}
                onPress={() => {
                    navigation.navigate('MatchDetailPage', { matchSummary });
                }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: `http://ddragon.leagueoflegends.com/cdn/14.20.1/img/profileicon/${user.profileIconId}.png` }}
                    style={styles.profileIcon}
                />
                <Text style={styles.nameTag}>{user.name}#{user.tag}</Text>
                <Text style={styles.level}>Level: {user.summonerLevel}</Text>
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={matches}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderMatchCard}
                    onEndReached={fetchMoreMatches} 
                    onEndReachedThreshold={0.5} 
                    ListFooterComponent={isFetchingMore ? <ActivityIndicator size="small" color="#0000ff" /> : null}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0', // 设置背景颜色
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 15, // 圆角
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 }, // 阴影偏移
        shadowOpacity: 0.1, // 阴影透明度
        shadowRadius: 10, // 阴影半径
        elevation: 6, // 安卓上的阴影
    },
    profileIcon: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
        borderWidth: 2, 
        borderColor: '#ddd', // 设置头像边框颜色
    },
    nameTag: {
        fontSize: 20, // 增大字体大小
        fontWeight: 'bold',
        color: '#333', // 设置字体颜色
        marginBottom: 5,
    },
    level: {
        fontSize: 16,
        color: '#888', // 设置等级颜色为灰色
    },
});

export default MatchDetail;
