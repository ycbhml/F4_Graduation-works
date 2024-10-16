import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { heroImageMap } from '../../components/LOL/heroImageMap'; // 确保路径正确
import { HERO_DATA } from '../../components/LOL/LOL_hero_icons'; // 确保英雄数据已正确导入

const MatchDetailPage = ({ route }) => {
    const { matchSummary } = route.params; // 获取传递的 matchSummary 数据
    const championKey = matchSummary.champion;
    const heroData = HERO_DATA.find(hero => hero.Key === String(championKey)); // 确保 championKey 是字符串

    let finalImageUrl = require('../../assets/lol_hero_icons/default.png'); // 默认图片路径

    if (heroData) {
        const cleanedChampionId = heroData.id.split('_')[0].trim(); // 去除下划线及其后面的内容
        finalImageUrl = heroImageMap[cleanedChampionId] || finalImageUrl; // 获取对应的图片
    }

    const winLose = matchSummary.win ? '胜利' : '失败';
    const stats = `${matchSummary.kills} / ${matchSummary.deaths} / ${matchSummary.assists}`;
    const gameMode = matchSummary.mapId; // 如果需要更多的游戏模式信息，可以进一步处理

    return (
        <View style={styles.container}>
            <Image source={finalImageUrl} style={styles.championImage} />
            <Text style={styles.resultText}>{`比赛结果: ${winLose}`}</Text>
            <Text style={styles.statsText}>{`击杀/死亡/助攻: ${stats}`}</Text>
            <Text style={styles.modeText}>{`游戏模式: ${gameMode}`}</Text>
            <Text style={styles.timeText}>{`比赛时间: ${new Date(matchSummary.gameStartTimestamp).toLocaleString()}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    championImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    statsText: {
        fontSize: 16,
        marginVertical: 5,
    },
    modeText: {
        fontSize: 16,
        marginVertical: 5,
    },
    timeText: {
        fontSize: 16,
        marginVertical: 5,
    },
});

export default MatchDetailPage;
