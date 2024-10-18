import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';

// 默认物品图片，当物品ID为0时使用
const defaultItemImageUri = `http://3.35.209.179:8000/data/get_item_icon/0.png`;

const PlayerCard = ({ version, summonerName, championName, kills, deaths, assists, items = {}, championLevel, stats, summonerSpells }) => {
    const [expanded, setExpanded] = useState(false);
    const [animation] = useState(new Animated.Value(0));
    const [spellMap, setSpellMap] = useState(null); // 初始化为 null

    // 获取召唤师技能的映射表
    useEffect(() => {
        const fetchSummonerSpells = async () => {
            try {
                const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/summoner.json`);
                const data = await response.json();
                const spells = data.data;

                // 将spellId映射为spellName
                const spellMapping = {};
                Object.keys(spells).forEach((key) => {
                    const spell = spells[key];
                    spellMapping[spell.key] = spell.id;
                });
                setSpellMap(spellMapping); // 存储映射表
            } catch (error) {
                console.error('Failed to fetch summoner spells:', error);
            }
        };
        fetchSummonerSpells();
    }, [version]);

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

    console.log("playercard.version", version);
    console.log("palyercard, championid", championName);

    // 使用API来获取英雄图标
    const championImageUri = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championName}.png`;

    // 使用API来获取物品图标
    const itemImageUri = (itemId) => itemId !== 0
        ? `https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${itemId}.png`
        : defaultItemImageUri;

    // 使用API来获取召唤师技能图标
    const summonerSpellImageUri = (spellId) => {
        // 如果 spellMap 尚未加载完成，返回 null，避免提前渲染
        if (!spellMap) {
            return null;
        }
        const spellName = spellMap[spellId];
        console.log(`spellId ${spellId}, spellName ${spellName}`);  // 打印以调试

        // 如果找不到对应的技能名称，返回 null 避免空字符串问题
        return spellName
            ? `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spellName}.png`
            : null;
    };

    console.log("spell1Id", summonerSpells.spell1Id);
    console.log("spell2Id", summonerSpells.spell2Id);

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
                    <Text style={styles.summonerName}>{summonerName || '알 수 없는 소환사'}</Text>
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

                {/* 在展开部分中显示召唤师技能图标，如果 spellMap 已加载 */}
                {spellMap && (
                    <View style={styles.spellContainer}>
                        <Image source={{ uri: summonerSpellImageUri(summonerSpells?.spell1Id) }} style={styles.spellImage} />
                        <Image source={{ uri: summonerSpellImageUri(summonerSpells?.spell2Id) }} style={styles.spellImage} />
                    </View>
                )}

                <View style={styles.statsGrid}>
                    <View style={styles.statRow}>
                        <Text style={styles.statLabel}>미니언 처치:</Text>
                        <Text style={styles.statValue}>{stats?.minionsKilled || 0}</Text>

                        <Text style={styles.statLabel}>타워 파괴:</Text>
                        <Text style={styles.statValue}>{stats?.towersDestroyed || 0}</Text>

                        <Text style={styles.statLabel}>넥서스 파괴:</Text>
                        <Text style={styles.statValue}>{stats?.nexusKills || 0}</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statLabel}>최대 다중 킬:</Text>
                        <Text style={styles.statValue}>{stats?.largestMultiKill || 0}</Text>

                        <Text style={styles.statLabel}>최대 연속 킬
                        :</Text>
                        <Text style={styles.statValue}>{stats?.largestKillingSpree || 0}</Text>

                        <Text style={styles.statLabel}>치유:</Text>
                        <Text style={styles.statValue}>{stats?.totalHeal || 0}</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statLabel}>물리 피해:</Text>
                        <Text style={styles.statValue}>{stats?.physicalDamageDealt || 0}</Text>

                        <Text style={styles.statLabel}>마법 피해:</Text>
                        <Text style={styles.statValue}>{stats?.magicDamageDealt || 0}</Text>
 
                        <Text style={styles.statLabel}>고유 피해:</Text>
                        <Text style={styles.statValue}>{stats?.trueDamageDealt || 0}</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statLabel1}>총 피해:</Text>
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
        marginTop: 10,
        marginHorizontal: 5,
        paddingBottom: 10,
        borderRadius: 5,
    },
    spellImage: {
        width: 25,
        height: 25,
        marginRight: 10,
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
