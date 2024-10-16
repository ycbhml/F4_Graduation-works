import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const PlayerCard = ({ summonerName, championId, kills, deaths, assists, items = {} }) => {
    const [expanded, setExpanded] = useState(false);
    const [animation] = useState(new Animated.Value(0));

    const toggleExpand = () => {
        setExpanded(!expanded);
        Animated.timing(animation, {
            toValue: expanded ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const arrowRotation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    const contentHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 150],
    });

    // 使用API来获取英雄图标
    const championImageUri = `http://3.35.209.179:8000/data/get-hero-icon/${championId}.png`;

    // 使用API来获取物品图标
    const itemImageUri = (itemId) => `http://3.35.209.179:8000/data/get_item_icon/${itemId}.png`;

    return (
        <View style={styles.container}>
            {/* 顶部英雄头像、战绩和召唤师信息 */}
            <View style={styles.header}>
                <Image source={{ uri: championImageUri }} style={styles.heroImage} />
                <View style={styles.info}>
                    <Text style={styles.summonerName}>{summonerName || '未知召唤师'}</Text>
                    <Text>{kills}/{deaths}/{assists}</Text>
                    <View style={styles.itemContainer}>
                        {/* 渲染6个装备 */}
                        {[...Array(7).keys()].map(index => (
                            <Image 
                                key={index} 
                                source={{ uri: itemImageUri(items[`item${index}`]) }} 
                                style={styles.itemBox} 
                            />
                        ))}
                    </View>
                </View>
                <TouchableOpacity onPress={toggleExpand} style={styles.arrowButton}>
                    <Animated.Text style={{ transform: [{ rotate: arrowRotation }] }}>⌵</Animated.Text>
                </TouchableOpacity>
            </View>

            {/* 可展开部分 */}
            <Animated.View style={[styles.expandableContent, { height: contentHeight }]}>
                {/* 这里可以根据需要添加额外的玩家数据 */}
                <Text>更多信息展示...</Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heroImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    info: {
        flex: 1,
        marginLeft: 10,
    },
    summonerName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
    },
    itemText: {
        marginRight: 10,
    },
    itemBox: {
        width: 20,
        height: 20,
        backgroundColor: '#ddd',
        marginHorizontal: 5,
        borderRadius: 5,
    },
    arrowButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    expandableContent: {
        overflow: 'hidden',
        marginTop: 10,
    },
});

export default PlayerCard;
