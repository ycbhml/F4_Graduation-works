import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import PlayerCard from './PlayerCard'; // 确保 PlayerCard 组件已正确实现
import { get_match_full_detail } from '../../../tools/get_match_info_jsons'; // 导入自定义函数
import { useVersion } from '../../VersionContext';
const MatchDetailPageToMap11_12 = ({ route }) => {
    const {matchSummary, matchid, puuid } = route.params;
    const [matchDetail, setMatchDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    const version = useVersion();
    useEffect(() => {
        const fetchMatchDetail = async () => {
            try {
                const detail = await get_match_full_detail(matchSummary.matchId, puuid); // 获取比赛详情
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

    const winPlayers = [
        matchDetail?.winplayer1,
        matchDetail?.winplayer2,
        matchDetail?.winplayer3,
        matchDetail?.winplayer4,
        matchDetail?.winplayer5
    ].filter(player => player); 

    const losePlayers = [
        matchDetail?.loseplayer1,
        matchDetail?.loseplayer2,
        matchDetail?.loseplayer3,
        matchDetail?.loseplayer4,
        matchDetail?.loseplayer5
    ].filter(player => player); 
    
    return (
        <ScrollView style={styles.container}>
            {/* 胜利队伍 */}
            <View style={styles.header}>
                <View style={styles.winContainer}>
                    <Text style={styles.headerTitlefoWin}>승리 팀</Text>
                    {(() => {
                        const winKills = winPlayers.reduce((sum, player) => sum + (player?.kills || 0), 0);
                        const winDeaths = winPlayers.reduce((sum, player) => sum + (player?.deaths || 0), 0);
                        const winAssists = winPlayers.reduce((sum, player) => sum + (player?.assists || 0), 0);
                        return <Text style={styles.teamStats}>{`${winKills}/${winDeaths}/${winAssists}`}</Text>;
                    })()}
                </View>

                {/* 失败队伍 */}
                <View style={styles.loseContainer}>
                    <Text style={styles.headerTitlefoLose}>패배 팀</Text>
                    {(() => {
                        const loseKills = losePlayers.reduce((sum, player) => sum + (player?.kills || 0), 0);
                        const loseDeaths = losePlayers.reduce((sum, player) => sum + (player?.deaths || 0), 0);
                        const loseAssists = losePlayers.reduce((sum, player) => sum + (player?.assists || 0), 0);
                        return <Text style={styles.teamStats}>{`${loseKills}/${loseDeaths}/${loseAssists}`}</Text>;
                    })()}
                </View>
            </View>

            {/* 渲染胜利队伍的玩家信息 */}
            <View style={styles.teamContainer}>
                <Text style={styles.sectionTitlefoWin}>승리 팀</Text>
                {winPlayers.map((player, index) => (
                    <PlayerCard
                        key={index}
                        version={version}
                        summonerName={player.summonerName || '未知召唤师'}
                        tag={player.full_data.riotIdTagline}
                        championName={player.championName || 0}
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
                        }}
                        championLevel={player.full_data?.champLevel || 0}
                        summonerSpells={{
                            spell1Id: player.full_data?.summoner1Id || 0,
                            spell2Id: player.full_data?.summoner2Id || 0,
                        }}
                        stats={{
                            minionsKilled: player.full_data?.totalMinionsKilled || 0,
                            towersDestroyed: player.full_data?.turretKills || 0,
                            largestMultiKill: player.full_data?.largestMultiKill || 0,
                            largestKillingSpree: player.full_data?.largestKillingSpree || 0, // 最大连杀
                            nexusKills: player.full_data?.nexusKills || 0,
                            totalDamageDealt: player.full_data?.totalDamageDealtToChampions || 0, // 总伤害
                            physicalDamageDealt: player.full_data?.physicalDamageDealtToChampions || 0,
                            magicDamageDealt: player.full_data?.magicDamageDealtToChampions || 0,
                            trueDamageDealt: player.full_data?.trueDamageDealtToChampions || 0,
                            totalHeal: player.full_data?.totalHeal || 0, // 治疗
                        }}
                        
                    />
                ))}
            </View>

            {/* 渲染失败队伍的玩家信息 */}
            <View style={styles.teamContainer}>
                <Text style={styles.sectionTitlefoLose}>패배 팀</Text>
                {losePlayers.map((player, index) => (
                    <PlayerCard
                        key={index}
                        version={version}
                        summonerName={player.summonerName}
                        tag={player.full_data.riotIdTagline}
                        championName={player.championName}
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
                        }}
                        championLevel={player.full_data?.champLevel || 0}
                        summonerSpells={{
                            spell1Id: player.full_data?.summoner1Id || 0,
                            spell2Id: player.full_data?.summoner2Id || 0,
                        }}
                        stats={{
                            minionsKilled: player.full_data?.totalMinionsKilled || 0,
                            towersDestroyed: player.full_data?.turretKills || 0,
                            largestMultiKill: player.full_data?.largestMultiKill || 0,
                            largestKillingSpree: player.full_data?.largestKillingSpree || 0, // 最大连杀
                            nexusKills: player.full_data?.nexusKills || 0,
                            totalDamageDealt: player.full_data?.totalDamageDealtToChampions || 0, // 总伤害
                            physicalDamageDealt: player.full_data?.physicalDamageDealtToChampions || 0,
                            magicDamageDealt: player.full_data?.magicDamageDealtToChampions || 0,
                            trueDamageDealt: player.full_data?.trueDamageDealtToChampions || 0,
                            totalHeal: player.full_data?.totalHeal || 0, // 治疗
                        }}
                    />
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
        color: 'red'
    },
});

export default MatchDetailPageToMap11_12;
