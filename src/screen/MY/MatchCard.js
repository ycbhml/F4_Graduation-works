import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MatchCard = ({ championName, version, winLose, stats, gameMode, time, onPress }) => {
    const [imageUri, setImageUri] = useState(null); // 初始化为 null

    // 动态生成英雄图片 URL
    const formattedChampionName = championName.charAt(0).toUpperCase() + championName.slice(1).toLowerCase();
    const imageUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${formattedChampionName}.png`;
    const imageUrl2 = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championName}.png`;

    // 初始化为第一个URL
    useEffect(() => {
        setImageUri(imageUrl);
    }, [version, championName]);

    return (
        <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
            {/* 左侧图片 */}
            {imageUri && ( // 检查是否有有效的 URI
                <Image
                    source={{ uri: imageUri }}
                    style={styles.image}
                    onError={() => {
                        // 图片加载失败时切换到备用链接
                        setImageUri(imageUrl2);
                    }}
                />
            )}

            {/* 右侧信息内容 */}
            <View style={styles.infoContainer}>
                <View style={styles.row}>
                    {/* Win/Lose 信息 */}
                    <Text style={[styles.winLoseText, winLose === '승리' ? styles.winText : styles.loseText]}>
                        {winLose}
                    </Text>

                    {/* 战绩信息 */}
                    <Text style={styles.statsText}>{stats}</Text>
                </View>

                {/* 游戏模式 */}
                <Text style={styles.gameModeText}>{gameMode}</Text>

                {/* 时间 */}
                <Text style={styles.timeText}>{time}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    winLoseText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    winText: {
        color: 'green',
    },
    loseText: {
        color: 'red',
    },
    statsText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    gameModeText: {
        marginTop: 5,
        fontSize: 14,
        color: '#555',
    },
    timeText: {
        alignSelf: 'flex-end',
        fontSize: 12,
        color: '#888',
    },
});

export default MatchCard;
