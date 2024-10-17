import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';

// 默认物品图片，当物品ID为0时使用
const defaultItemImageUri = `http://3.35.209.179:8000/data/get_item_icon/default.png`;

const PlayerCard = ({ summonerName, championId, kills, deaths, assists, items = {}, championLevel, stats, summonerSpells }) => {
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
        outputRange: [0, 150], // Adjust this based on your content's actual height
    });

    // 使用API来获取英雄图标
    const championImageUri = `http://3.35.209.179:8000/data/get-hero-icon/${championId}.png`;

    // 使用API来获取物品图标
    const itemImageUri = (itemId) => itemId !== 0 
        ? `http://3.35.209.179:8000/data/get_item_icon/${itemId}.png`
        : defaultItemImageUri;

    // 使用API来获取召唤师技能图标
    const summonerSpellImageUri = (spellId) => `http://3.35.209.179:8000/get_summoner_name_and_spell_icon/${spellId}`;

    return (
        <View style={styles.container}>
            {/* 顶部英雄头像、战绩和召唤师信息 */}
            <View style={styles.header}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: championImageUri }} style={styles.heroImage} />
                    {/* 英雄等级 */}
                    <View style={styles.levelCircle}>
                        <Text style={styles.levelText}>{championLevel}</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <Text style={styles.summonerName}>{summonerName || '未知召唤师'}</Text>
                    <Text>{kills}/{deaths}/{assists}</Text>
                    <View style={styles.itemContainer}>
                        {/* 渲染7个装备，使用默认图片代替 item 为 0 的情况 */}
                        {[...Array(7).keys()].map(index => (
                            <Image 
                                key={index} 
                                source={{ uri: itemImageUri(items[`item${index}`] || 0) }} 
                                style={styles.itemBox} 
                            />
                        ))}
                    </View>
                </View>
                <TouchableOpacity onPress={toggleExpand} style={styles.arrowButton}>
                    <Animated.Text style={{ transform: [{ rotate: arrowRotation }] }}>⌵</Animated.Text>
                </TouchableOpacity>
            </View>

            {/* 可展开部分，修改为图片中显示的布局 */}
            <Animated.View style={[styles.expandableContent, { height: contentHeight }]}>
                
                {/* 在展开部分中显示召唤师技能图标 */}
                <View style={styles.spellContainer}>
                    <Image source={{ uri: summonerSpellImageUri(summonerSpells?.spell1Id) }} style={styles.spellImage} />
                    <Image source={{ uri: summonerSpellImageUri(summonerSpells?.spell2Id) }} style={styles.spellImage} />
                </View>
              
                <View style={styles.statsGrid}>
                    <View style={styles.statRow}>
                        <Text style={styles.statLabel}>补兵:</Text>
                        <Text style={styles.statValue}>{stats?.minionsKilled || 0}</Text>

                        <Text style={styles.statLabel}>推塔:</Text>
                        <Text style={styles.statValue}>{stats?.towersDestroyed || 0}</Text>

                        <Text style={styles.statLabel}>水晶:</Text>
                        <Text style={styles.statValue}>{stats?.nexusKills || 0}</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statLabel}>最大多杀:</Text>
                        <Text style={styles.statValue}>{stats?.largestMultiKill || 0}</Text>

                        <Text style={styles.statLabel}>最大连杀:</Text>
                        <Text style={styles.statValue}>{stats?.largestKillingSpree || 0}</Text>

                        <Text style={styles.statLabel}>治疗:</Text>
                        <Text style={styles.statValue}>{stats?.totalHeal || 0}</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statLabel}>物理伤害:</Text>
                        <Text style={styles.statValue}>{stats?.physicalDamageDealt || 0}</Text>

                        <Text style={styles.statLabel}>魔法伤害:</Text>
                        <Text style={styles.statValue}>{stats?.magicDamageDealt || 0}</Text>

                        <Text style={styles.statLabel}>真实伤害:</Text>
                        <Text style={styles.statValue}>{stats?.trueDamageDealt || 0}</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statLabel1}>总伤害:</Text>
                        <Text style={styles.statValue1}>{stats?.totalDamageDealt || 0}</Text>
                    </View>
                </View>
                        
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
    imageContainer: {
        position: 'relative',
    },
    heroImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    levelCircle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
    levelText: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 10,
    },
    info: {
        flex: 1,
        marginLeft: 10,
    },
    summonerName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    spellContainer: {
        flexDirection: 'row',
        marginTop: 10, // 让图标和顶部内容有更多间距
        marginHorizontal: 5,
        paddingBottom: 10, // 增加图标与文本的间距
        borderRadius: 5,
    },
    spellImage: {
        width: 25,
        height: 25,
        marginRight: 10, // 调整图标之间的间距
        borderRadius: 5,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
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
    statsGrid: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    statRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    statLabel: {
        fontWeight: 'bold',
        fontSize: 12,
        flex: 2,
        textAlign: 'left',
        marginRight: 5,
    },
    statValue: {
        flex: 1,
        fontSize: 12,
        textAlign: 'left',
    },
    statLabel1: {
        fontWeight: 'bold',
        fontSize: 12,
        flex: 1,
        textAlign: 'left',
        marginRight: 5,
    },
    statValue1: {
        flex: 3.7,
        fontSize: 12,
        textAlign: 'left',
    },
});

export default PlayerCard;
