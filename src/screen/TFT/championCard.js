import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { useCdragonData } from '../../CdragonDataContext'; // 引入全局 CdragonDataContext

const ChampionCard = ({ champion, matchedData, shortVersion }) => {
    const { cdragonData, loading: cdragonLoading } = useCdragonData();
    const [expanded, setExpanded] = useState(false);
    const [animation] = useState(new Animated.Value(0));
    const [activeTab, setActiveTab] = useState('技能介绍'); // 控制标签页的切换
    console.log("champion version", shortVersion);

    // 确保路径正确的属性图标
    const attributeIcons = {
        Health: require('../../assets/img/Health.png'),
        Mana: require('../../assets/img/Mana.png'),
        AttackDamage: require('../../assets/img/AD.png'),
        Armor: require('../../assets/img/Armor.png'),
        AttackSpeed: require('../../assets/img/AS.png'),
        CritChance: require('../../assets/img/CritChance.png'),
        CritDamage: require('../../assets/img/CritDamage.png'),
        AbilityPower: require('../../assets/img/AP.png'),
        MagicResist: require('../../assets/img/MagicResist.png'),
        Range: require('../../assets/img/Range.png'),
        Gold: require('../../assets/img/gold.png'),
    };
    const borderColor = () => {
        switch (champion.matchedData.cost) {
            case 1:
                return 'silver'; // 银色
            case 2:
                return 'green'; // 绿色
            case 3:
                return 'blue'; // 蓝色
            case 4:
                return 'purple'; // 紫色
            case 5:
                return 'orange'; // 橙色
            default:
                return '#ccc'; // 默认颜色
        }
    };

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

    // 替换占位符和 <br> 的函数
    // 替换占位符和 <br> 的函数
    const replacePlaceholdersInDescription = (description, variables) => {
        const variablesMap = {};

        // 构建技能数值映射，使用整个数组
        variables.forEach(variable => {
            variablesMap[variable.name.toLowerCase()] = variable.value;
        });

        // 1. 替换 <br> 标签为换行符
        let formattedDesc = description.replace(/<br\s*\/?>/g, '\n');

        // 2. 删除所有尖括号及其中的内容
        formattedDesc = formattedDesc.replace(/<[^>]*>/g, '');

        // 3. 替换 @variableName@ 样式的占位符
        formattedDesc = formattedDesc.replace(/@(\w+)@/g, (match, variableName) => {
            // 从第二个大写字母开始提取核心变量名
            const coreVariableName = variableName.slice(1).replace(/^[^A-Z]+/, '').toLowerCase();

            // 检查是否存在包含 `coreVariableName` 的键
            const matchingKey = Object.keys(variablesMap).find(key => key.includes(coreVariableName));

            if (matchingKey) {
                const values = variablesMap[matchingKey];
                return `${values[1] || match}/${values[2] || match}/${values[3] || match}`; // 返回1星/2星/3星数值
            }

            // 如果未匹配到，则返回原始占位符
            return match;
        });

        return formattedDesc;
    };

    // 使用示例
    const formattedDescription = replacePlaceholdersInDescription(
        matchedData.ability.desc || '技能详细介绍',
        champion.matchedData.ability.variables || []
    );




    return (
        <View style={[styles.container, { borderColor: borderColor() }]}>

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
                <View style={[styles.goldContainer,{borderColor: borderColor()}]}>
                    <Image source={attributeIcons.Gold} style={styles.attributeIcon} />
                    <Text style={styles.goldText}>{champion.matchedData.cost}</Text>
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
                                    {/* 右侧 Mana 字段 */}
                                    <View style={styles.manaContainer}>
                                        <Text style={styles.attributeLabel}>Mana</Text>
                                        <View style={styles.attributeImgRow}>
                                            <Image source={attributeIcons.Mana} style={styles.attributeIcon} />
                                            <Text style={styles.attributeValue}>
                                                {champion.matchedData.stats.initialMana} / {champion.matchedData.stats.mana}
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                {/* 技能详细介绍（可滚动） */}
                                <ScrollView
                                    style={styles.skillDescriptionContainer}
                                    nestedScrollEnabled={true}
                                >
                                    <Text style={styles.skillDescription}>{formattedDescription}</Text>
                                </ScrollView>
                            </View>
                        ) : (
                            <View style={styles.attributesContainer}>
                                <View style={styles.attributeColumn}>
                                    {/* 左侧五个属性 */}
                                    <View style={styles.attributeRow}>
                                        <Text style={styles.attributeLabel}>Health</Text>
                                        <View style={styles.attributeImgRow}>
                                            <Image source={attributeIcons.Health} style={styles.attributeIcon} />
                                            <Text style={styles.attributeValue}>{champion.matchedData.stats.hp} / {Math.floor(champion.matchedData.stats.hp * 1.8)} / {Math.floor(champion.matchedData.stats.hp * 3.24)}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.attributeRow}>
                                        <Text style={styles.attributeLabel}>Attack Damage</Text>
                                        <View style={styles.attributeImgRow}>
                                            <Image source={attributeIcons.AttackDamage} style={styles.attributeIcon} />
                                            <Text style={styles.attributeValue}>{champion.matchedData.stats.damage} / {Math.floor(champion.matchedData.stats.damage * 1.5)} / {Math.floor(champion.matchedData.stats.damage * 2.25)}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.attributeRow}>
                                        <Text style={styles.attributeLabel}>Armor</Text>
                                        <View style={styles.attributeImgRow}>
                                            <Image source={attributeIcons.Armor} style={styles.attributeIcon} />
                                            <Text style={styles.attributeValue}>{champion.matchedData.stats.armor}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.attributeRow}>
                                        <Text style={styles.attributeLabel}>Attack Speed</Text>
                                        <View style={styles.attributeImgRow}>
                                            <Image source={attributeIcons.AttackSpeed} style={styles.attributeIcon} />
                                            <Text style={styles.attributeValue}>{champion.matchedData.stats.attackSpeed.toFixed(2)}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.attributeRow}>
                                        <Text style={styles.attributeLabel}>Crit Chance</Text>
                                        <View style={styles.attributeImgRow}>
                                            <Image source={attributeIcons.CritChance} style={styles.attributeIcon} />
                                            <Text style={styles.attributeValue}>{(champion.matchedData.stats.critChance * 100).toFixed(0)}%</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.attributeColumn}>
                                    {/* 右侧五个属性 */}
                                    <View style={styles.attributeRow}>
                                        <Text style={styles.attributeLabel}>Mana</Text>
                                        <View style={styles.attributeImgRow}>
                                            <Image source={attributeIcons.Mana} style={styles.attributeIcon} />
                                            <Text style={styles.attributeValue}>{champion.matchedData.stats.initialMana} / {champion.matchedData.stats.mana}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.attributeRow}>
                                        <Text style={styles.attributeLabel}>Ability Power</Text>
                                        <View style={styles.attributeImgRow}>
                                            <Image source={attributeIcons.AbilityPower} style={styles.attributeIcon} />
                                            <Text style={styles.attributeValue}>{champion.matchedData.stats.abilityPower || 100}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.attributeRow}>
                                        <Text style={styles.attributeLabel}>Magic Resist</Text>
                                        <View style={styles.attributeImgRow}>
                                            <Image source={attributeIcons.MagicResist} style={styles.attributeIcon} />
                                            <Text style={styles.attributeValue}>{champion.matchedData.stats.magicResist}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.attributeRow}>
                                        <Text style={styles.attributeLabel}>Crit Damage</Text>
                                        <View style={styles.attributeImgRow}>
                                            <Image source={attributeIcons.CritDamage} style={styles.attributeIcon} />
                                            <Text style={styles.attributeValue}>{(champion.matchedData.stats.critMultiplier * 100).toFixed(0)}%</Text>
                                        </View>
                                    </View>
                                    <View style={styles.attributeRow}>
                                        <Text style={styles.attributeLabel}>Range</Text>
                                        <View style={styles.attributeImgRow}>
                                            <Image source={attributeIcons.Range} style={styles.attributeIcon} />
                                            <Text style={styles.attributeValue}>{champion.matchedData.stats.range}</Text>
                                        </View>
                                    </View>
                                </View>
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
        borderWidth: 2, // 设置边框宽度
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
    attributeIcon: {
        width: 13,
        height: 13,
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
    goldContainer: {
        flexDirection: 'row', // 横向布局
        alignItems: 'center', // 垂直居中对齐
        backgroundColor: 'transparent', // 背景色透明，与 container 的背景一致
        marginTop: 10, // 可以根据需要调整间距
        padding: 5, // 可选：给点内边距
        borderWidth:1,
        borderRadius: 5,
    },
    goldText: {
        fontSize: 16, // 可以根据需要调整字体大小
        color: 'black', // 字体颜色为白色
        fontWeight: 'bold', // 加粗字体
        marginLeft: 10, // 图标和文本之间的间距
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
    attributesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    attributeColumn: {
        flex: 1,
    },
    attributeRow: {
        alignItems: 'center',
        marginVertical: 5,
    },
    attributeImgRow: {
        alignItems: 'center',
        marginVertical: 0,
        flexDirection: 'row',
    },
    attributeLabel: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    attributeValue: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginTop: 2,
    },
    manaContainer: {
        position: 'absolute', // 绝对定位放置在最右边
        right: 10,
        alignItems: 'center',
    },

});

export default ChampionCard;
