import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // 引入 react-native-linear-gradient

const MatchCard = ({ championName, version, winLose, stats, gameMode, time, onPress }) => {
    const [imageUri, setImageUri] = useState(null);

    // 格式化英雄名称，确保首字母大写，其余小写
    const formattedChampionName = championName.charAt(0).toUpperCase() + championName.slice(1).toLowerCase();
    const imageUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${formattedChampionName}.png`;
    const imageUrl2 = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championName}.png`;

    // 初始化为第一个URL
    useEffect(() => {
        setImageUri(imageUrl);
    }, [version, championName]);

    return (
        <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
            {/* 左侧竖条渐变效果 */}
            <LinearGradient
                colors={winLose === '승리' ? ['#00c853', '#b9f6ca'] : ['#d32f2f', '#ffcdd2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }} // 渐变横向覆盖竖条
                style={styles.gradientStrip}
            />

            <View style={styles.cardContent}>
                {/* 左侧图片 */}
                {imageUri && (
                    <Image
                        source={{ uri: imageUri }}
                        style={styles.image}
                        onError={() => {
                            setImageUri(imageUrl2); // 图片加载失败时切换到备用链接
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
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        margin: 6,
        borderRadius: 15,
        overflow: 'hidden', // 防止内容溢出
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    gradientStrip: {
        width: 15, // 设置竖条宽度
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15, // 竖条的圆角和卡片一致
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        padding: 15,
        flex: 1, // 填充剩余空间
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 25,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 15,
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
        color: '#333',
    },
    gameModeText: {
        marginTop: 5,
        fontSize: 10,
        color: '#666',
    },
    timeText: {
        alignSelf: 'flex-end',
        fontSize: 12,
        color: '#888',
    },
});

export default MatchCard;
