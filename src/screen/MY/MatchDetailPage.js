import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import PlayerCard from './PlayerCard'; // 确保 PlayerCard 组件已正确实现
import { get_match_full_detail } from '../../../tools/get_match_info_jsons'; // 导入自定义函数

const MatchDetailPage = ({ route }) => {
    const {matchSummary, matchid, puuid } = route.params;
    const [matchDetail, setMatchDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log("matchdetailpage-matchid",matchSummary.matchid);
    useEffect(() => {
        const fetchMatchDetail = async () => {
            try {
                const detail = await get_match_full_detail(matchSummary.matchid, puuid); // 获取比赛详情
                //console.log('Match detail fetched:', detail); // 打印获取到的数据
                setMatchDetail(detail);
            } catch (error) {
                console.error('Error fetching match detail:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchMatchDetail();
    }, [matchid, puuid]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!matchDetail) {
        return <Text>No match details found.</Text>;
    }

    // 确认数据结构
    //console.log('matchDetail:', matchDetail);

    // 检查玩家数据是否存在
    const winPlayers = [
        matchDetail?.winplayer1,
        matchDetail?.winplayer2,
        matchDetail?.winplayer3,
        matchDetail?.winplayer4,
        matchDetail?.winplayer5
    ].filter(player => player); // 过滤掉空的玩家数据

    const losePlayers = [
        matchDetail?.loseplayer1,
        matchDetail?.loseplayer2,
        matchDetail?.loseplayer3,
        matchDetail?.loseplayer4,
        matchDetail?.loseplayer5
    ].filter(player => player); // 过滤掉空的玩家数据

    //console.log('Win Players:', winPlayers);
    //console.log('Lose Players:', losePlayers);
    
    console.log("winplayer1",winPlayers[0].summonerName);
    console.log("winplayer2",winPlayers[1].item0);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                {/* 胜利队伍 */}
                <View style={styles.winContainer}>
                    <Text style={styles.headerTitlefoWin}>胜利队伍</Text>
                    {(() => {
                        const winKills = winPlayers.reduce((sum, player) => sum + (player?.kills || 0), 0);
                        const winDeaths = winPlayers.reduce((sum, player) => sum + (player?.deaths || 0), 0);
                        const winAssists = winPlayers.reduce((sum, player) => sum + (player?.assists || 0), 0);
                        const winStats = `${winKills}/${winDeaths}/${winAssists}`; // 组装成一个字符串
                        return <Text style={styles.teamStats}>{winStats}</Text>; // 渲染字符串
                    })()}
                </View>

                {/* 失败队伍 */}
                <View style={styles.loseContainer}>
                    <Text style={styles.headerTitlefoLose}>失败队伍</Text>
                    {(() => {
                        const loseKills = losePlayers.reduce((sum, player) => sum + (player?.kills || 0), 0);
                        const loseDeaths = losePlayers.reduce((sum, player) => sum + (player?.deaths || 0), 0);
                        const loseAssists = losePlayers.reduce((sum, player) => sum + (player?.assists || 0), 0);
                        const loseStats = `${loseKills}/${loseDeaths}/${loseAssists}`; // 组装成一个字符串
                        return <Text style={styles.teamStats}>{loseStats}</Text>; // 渲染字符串
                    })()}
                </View>
            </View>
            
          
            {/* 渲染胜利队伍的玩家信息 */}
<View style={styles.teamContainer}>
    <Text style={styles.sectionTitlefoWin}>胜利队伍玩家</Text>
    {winPlayers && winPlayers.length > 0 ? (
        winPlayers.map((player, index) => (
            player && (
                <PlayerCard
                    key={index}
                    summonerName={player.summonerName || '未知召唤师'}
                    championId={player.championName || 0} // 传递 championId 用于渲染英雄图片
                    kills={player.kills || 0}
                    deaths={player.deaths || 0}
                    assists={player.assists || 0}
                    items={{
                        item0: player.full_data?.item0 || 0,
                        item1: player.full_data?.item1 || 0,
                        item2: player.full_data?.item2 || 0,
                        item3: player.full_data?.item3 || 0,
                        item4: player.full_data?.item4 || 0,
                        item5: player.full_data?.item5 || 0,
                        item6: player.full_data?.item6 || 0,
                    }} // 传递物品数据
                />
            )
        ))
    ) : (
        <Text>没有玩家数据</Text>
    )}
</View>

{/* 渲染失败队伍的玩家信息 */}
<View style={styles.teamContainer}>
    <Text style={styles.sectionTitlefoLose}>失败队伍玩家</Text>
    {losePlayers.map((player, index) => (
        player && (
            <PlayerCard
                key={index}
                summonerName={player.summonerName}
                championId={player.championName}
                kills={player.kills}
                deaths={player.deaths}
                assists={player.assists}
                items={{
                    item0: player.full_data?.item0 || 0,
                    item1: player.full_data?.item1 || 0,
                    item2: player.full_data?.item2 || 0,
                    item3: player.full_data?.item3 || 0,
                    item4: player.full_data?.item4 || 0,
                    item5: player.full_data?.item5 || 0,
                    item6: player.full_data?.item6 || 0,
                }} // 传递物品数据
            />
        )
    ))}
</View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#f2f2f2',
        marginBottom: 20,
    },
    winContainer: {
        alignItems: 'center',
        flex: 1,
    },
    loseContainer: {
        alignItems: 'center',
        flex: 1,
    },
    headerTitlefoWin: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'green'
    },
    headerTitlefoLose: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'red'
    },
    teamStats: {
        fontSize: 14,
        color: '#666',
    },
    teamContainer: {
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    sectionTitlefoWin: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'green'
    },
    sectionTitlefoLose: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color:"red"
    },
});

export default MatchDetailPage;
