import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { useCdragonData } from '../../CdragonDataContext'; // 引入全局 CdragonDataContext

const ChampionCard = ({ champion, matchedData, shortVersion }) => {
    const { cdragonData, loading: cdragonLoading } = useCdragonData();
    const [expanded, setExpanded] = useState(false);
    const [animation] = useState(new Animated.Value(0));
    const [activeTab, setActiveTab] = useState('技能介绍'); // 控制标签页的切换
    console.log("champion version", shortVersion);

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
        outputRange: [0, 300],
    });

    const getTraitIcon = (traitName) => {
        const traitData = cdragonData.sets["12"].traits.find(
            item => item.name === traitName && item.apiName.startsWith("TFT12")
        );
        return traitData && traitData.icon
            ? getIconUrl(traitData.icon)
            : null;
    };

    const getIconUrl = (path) => path
        ? `https://raw.communitydragon.org/${shortVersion}/game/${path.toLowerCase().replace('.tex', '.png')}`
        : null;
    console.log("技能属性", champion.matchedData.ability.variables);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleExpand} style={styles.header}>
                <Image
                    source={{ uri: getIconUrl(champion.matchedData.tileIcon) }}
                    style={styles.championImage}
                    onError={(error) => console.error("Image loading error:", error.nativeEvent.error)}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.championName}>{champion.name}</Text>
                    <View style={styles.traitsContainer}>
                        {(champion.matchedData.traits || []).map((trait, index) => (
                            <View key={index} style={styles.traitItem}>
                                <Image
                                    source={{ uri: getTraitIcon(trait) }}
                                    style={[styles.traitIcon, { tintColor: 'gray' }]}
                                />
                                <Text style={styles.traitText}>{trait}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <Animated.Text style={{ transform: [{ rotate: arrowRotation }] }}>⌵</Animated.Text>
            </TouchableOpacity>

            <Animated.View style={[styles.expandableContent, { height: contentHeight }]}>
                {expanded && (
                    <View style={styles.detailsContainer}>
                        {/* 标签栏 */}
                        <View style={styles.tabContainer}>
                            <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('技能介绍')}>
                                <Text style={activeTab === '技能介绍' ? styles.activeTabText : styles.tabText}>技能介绍</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('属性介绍')}>
                                <Text style={activeTab === '属性介绍' ? styles.activeTabText : styles.tabText}>属性介绍</Text>
                            </TouchableOpacity>
                        </View>

                        {/* 标签内容 */}
                        {activeTab === '技能介绍' ? (
                            <View style={styles.skillContainer}>
                                <View style={styles.skillRow}>
                                    {/* 技能图标 */}
                                    <Image
                                        source={{ uri: getIconUrl(champion.matchedData.ability.icon) }}
                                        style={styles.skillIcon}
                                        onError={(error) => console.error("Image loading error for skill icon:", error.nativeEvent.error)}
                                    />

                                    {/* 技能名称 */}
                                    <Text style={styles.skillNameText}>{champion.matchedData.ability.name || '技能名称'}</Text>
                                </View>

                                {/* 技能详细介绍（可滚动） */}
                                <ScrollView
                                    style={styles.skillDescriptionContainer}
                                    nestedScrollEnabled={true} // 启用嵌套滚动
                                >
                                    <Text style={styles.skillDescription}>{matchedData.ability.desc || '技能详细介绍'}</Text>
                                </ScrollView>
                            </View>
                        ) : (
                            <View style={styles.attributesContainer}>
                                <Text style={styles.emptyContentText}>属性介绍内容清空</Text>
                            </View>
                        )}
                    </View>
                )}
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
    championImage: {
        width: 50,
        height: 50,
        borderRadius: 4,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
    },
    championName: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    skillRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    skillIcon: {
        width: 50,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 10,
    },
    skillNameText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    traitsContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    traitItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8,
    },
    traitIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    traitText: {
        fontSize: 10,
        color: 'gray',
    },
    expandableContent: {
        overflow: 'hidden',
        marginTop: 10,
    },
    detailsContainer: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    tabContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    tabText: {
        fontSize: 14,
        color: '#666',
    },
    activeTabText: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
    },
    skillContainer: {
        marginTop: 10,
    },
    skillDescriptionContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginTop: 10,
        borderRadius: 4,
        height: 150, // 设置容器高度以便滚动
    },
    skillDescriptionLabel: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    skillDescription: {
        fontSize: 12,
        color: 'black',
    },
    attributesContainer: {
        marginTop: 10,
    },
    emptyContentText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        paddingVertical: 20,
    },
});

export default ChampionCard;
