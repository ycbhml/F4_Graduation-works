import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';

// 默认物品图片，当物品ID为0时使用本地图标
const defaultItemImageUri = require('../../assets/lol_items/0.png');

// 属性图标本地图片路径映射
const attributeIcons = {
    AD: require('../../assets/img/AD.png'),
    AP: require('../../assets/img/AP.png'),
    MagicResist: require('../../assets/img/MagicResist.png'),
    Health: require('../../assets/img/Health.png'),
    Armor: require('../../assets/img/Armor.png'),
    AS: require('../../assets/img/AS.png'),
    Mana: require('../../assets/img/Mana.png'),
    CritChance: require('../../assets/img/CritChance.png'),
};

const ItemCard = ({ version, item, shortVersion, cdragonData }) => {
    const [expanded, setExpanded] = useState(false);
    const [animation] = useState(new Animated.Value(0));

    // 允许的属性
    const allowedAttributes = ['AD', 'AP', 'MagicResist', 'Health', 'Armor', 'AS', 'Mana', 'CritChance'];

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

    const getIconUrl = (path) => path ? `https://raw.communitydragon.org/${shortVersion}/game/${path.toLowerCase().replace('.tex', '.png')}` : defaultItemImageUri;

    const replaceEffectsInDesc = (desc, effects) => {
        const usedKeys = new Set();
        let detailedAttributes = []; // 存储详细运算结果
    
        // 先替换 <br> 标签为换行符
        let cleanedDesc = desc.replace(/<br\s*\/?>/g, '\n');
    
        // 删除所有尖括号及其内容
        let finalDesc = '';
        let inTag = false;
    
        for (let char of cleanedDesc) {
            if (char === '<') {
                inTag = true; // 开始尖括号
            } else if (char === '>') {
                inTag = false; // 结束尖括号
            } else if (!inTag) {
                finalDesc += char; // 仅在不在尖括号内时添加字符
            }
        }
    
        // 删除 %% 占位符
        let replacedDesc = replacePlaceholdersInDesc(finalDesc);
    
        // 替换 @占位符@
        const placeholderPattern = /@(\w+)([\*\/\+\-])?(\d+)?@/g;
        let match;
    
        while ((match = placeholderPattern.exec(finalDesc)) !== null) {
            const variable = match[1]; // 变量名
            const operator = match[2]; // 运算符（如果有）
            const number = match[3] ? parseFloat(match[3]) : null; // 数字（如果有）
    
            // 从 effects 中获取变量的值
            const baseValue = effects[variable];
    
            // 如果找不到变量值，则继续
            if (baseValue === undefined) continue;
    
            let result = baseValue;
    
            // 处理运算符
            if (operator && number !== null) {
                switch (operator) {
                    case '*':
                        result = Math.floor(baseValue * number); // 使用 Math.floor() 取整
                        break;
                    case '/':
                        result = Math.floor(baseValue / number); // 使用 Math.floor() 取整
                        break;
                    case '+':
                        result = Math.floor(baseValue + number); // 使用 Math.floor() 取整
                        break;
                    case '-':
                        result = Math.floor(baseValue - number); // 使用 Math.floor() 取整
                        break;
                }
                detailedAttributes.push(`${variable}${operator}${number}: ${result}`); // 将计算结果记录
            } else {
                // 没有运算符，直接使用 key 的值
                result = Math.floor(baseValue); // 使用 Math.floor() 取整
                detailedAttributes.push(`${variable}: ${result}`); // 记录属性值
            }
    
            // 替换描述中的占位符
            replacedDesc = replacedDesc.split(match[0]).join(result); // 使用原始匹配替换
            usedKeys.add(variable); // 记录被使用的键
        }
    
        // 处理未使用的效果
        const unusedEffects = Object.keys(effects).filter(key => !usedKeys.has(key));
    
        return { replacedDesc, unusedEffects, detailedAttributes };
    };
    
    // 删除占位符的新方法
    const replacePlaceholdersInDesc = (desc) => {
        // 匹配所有形如 %i:scaleAS% 的占位符
        const placeholderPattern = /%\w+:\w+%/g; // 例如 %i:scaleAS%
    
        // 使用 replace 方法将所有匹配的占位符替换为空字符串
        const replacedDesc = desc.replace(placeholderPattern, '');
    
        return replacedDesc; // 返回处理后的描述
    };
    
    
    const { replacedDesc, unusedEffects, detailedAttributes } = replaceEffectsInDesc(item.desc || '', item.effects || {});

    // 获取合成路径的图片
    const compositionImages = item.composition?.map(apiName => {
        const matchedData = cdragonData.items.find(cItem => cItem.apiName === apiName);
        return matchedData ? getIconUrl(matchedData.icon) : null; // 返回对应的图片URL
    }).filter(Boolean); // 过滤掉null值

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleExpand} style={styles.arrowButton}>
            <View style={styles.header}>
                <Image source={{ uri: getIconUrl(item.icon) }} style={styles.itemImage} />
                <View style={styles.infoContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    {/* 显示所有符合条件的简略属性 */}
                    <View style={styles.itemAttributes}>
                        {allowedAttributes.map(attr => {
                            if (item.effects[attr] !== undefined) { // 确保正确访问 item.effects
                                // 进行百分比格式化
                                const displayValue = (item.effects[attr] < 1 && item.effects[attr] > 0) ? `${(item.effects[attr] * 100).toFixed(0)}%` : item.effects[attr];

                                return (
                                    <View style={styles.attributeRow} key={attr}>
                                        <Image source={attributeIcons[attr]} style={styles.attributeIcon} />
                                        <Text style={styles.attributeText}>{displayValue}</Text>
                                    </View>
                                );
                            }
                            return null;
                        }).filter(Boolean)}
                    </View>
                </View>

                
                    <Animated.Text style={{ transform: [{ rotate: arrowRotation }] }}>⌵</Animated.Text>
                
            </View>
            </TouchableOpacity>

            <Animated.View style={[styles.expandableContent, { height: contentHeight }]}>
                {expanded && (
                    <View style={styles.detailsContainer}>
                        {/* 使用 Text 组件显示描述 */}
                        <Text style={styles.itemDescription}>{replacedDesc}</Text>
                        {/* 显示合成路径的图片 */}
                        {compositionImages && (
                            <View style={styles.compositionContainer}>
                                {compositionImages.map((imageUri, index) => (
                                    <Image key={index} source={{ uri: imageUri }} style={styles.compositionImage} />
                                ))}
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
    itemImage: {
        width: 40,
        height: 40,
        borderRadius: 5,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'black',
    },
    itemAttributes: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
    },
    attributeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    attributeIcon: {
        width: 10,
        height: 10,
        marginRight: 5,
    },
    attributeText: {
        fontSize: 12,
        color: '#666',
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
    detailsContainer: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    itemDescription:{

        fontSize: 14,
        color: '#333',
        marginTop: 5,
    },
    compositionContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    compositionImage: {
        width: 30,
        height: 30,
        marginHorizontal: 5,
    },
});

export default ItemCard;
