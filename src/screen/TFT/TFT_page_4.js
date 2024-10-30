import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Polygon, Image as SvgImage } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useVersion } from '../../VersionContext';
import { useCdragonData } from '../../CdragonDataContext';

const hexSize = 25; // 六边形的半径大小
const numRows = 4; // 行数
const numCols = 7; // 列数
const hexWidth = hexSize * 2;
const hexHeight = Math.sqrt(3) * hexSize;

export default function Page4() {
    const hexSize = 25; // 六边形的半径大小
    const numRows = 4; // 行数
    const numCols = 7; // 列数
    const hexWidth = hexSize * 2;
    const hexHeight = Math.sqrt(3) * hexSize;

    // 计算六边形的点
    const hexagonPoints = [
        `${hexWidth / 2},0`,
        `${hexWidth},${hexHeight / 2}`,
        `${hexWidth},${hexHeight}`,
        `${hexWidth / 2},${(3 * hexHeight) / 2}`,
        `0,${hexHeight}`,
        `0,${hexHeight / 2}`,
    ].join(' ');

    const version = useVersion();
    const shortVersion = version.split('.').slice(0, 2).join('.');
    const ChangeJsonUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/tft-champion.json`;
    const TraitJsonUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/tft-trait.json`;

    const [loading, setLoading] = useState(true);
    const [mostFrequentNumber, setMostFrequentNumber] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [championList, setChampionList] = useState([]);
    const [selectedChampion, setSelectedChampion] = useState(null); // 选中的英雄
    const [hexImages, setHexImages] = useState(Array(numRows).fill(null).map(() => Array(numCols).fill(null))); // 六边形图像
    const [traitsCount, setTraitsCount] = useState({}); // traits 计数
    const [traitsImages, setTraitsImages] = useState({}); // traits 图片映射
    const [isHexHidden, setIsHexHidden] = useState(Array(numRows).fill(null).map(() => Array(numCols).fill(false))); // 追踪每个六边形是否隐藏


    useEffect(() => {
        const fetchTraitJson = async () => {
            try {
                const response = await fetch(TraitJsonUrl);
                const traitJson = await response.json();
                const traitImages = {};
                Object.values(traitJson.data).forEach((trait) => {
                    traitImages[trait.name] = `https://ddragon.leagueoflegends.com/cdn/${version}/img/tft-trait/${trait.image.full}`;
                });

                setTraitsImages(traitImages);
            } catch (error) {
                console.error('Error fetching traitJson data:', error);
            }
        };

        fetchTraitJson();
    }, [TraitJsonUrl, version]);

    // 确保在 traitsImages 更新后触发重新渲染
    useEffect(() => {
        console.log('Traits Images:', traitsImages);
    }, [traitsImages]);


    // 获取 changeJson 数据并查找最常见的数字
    useEffect(() => {
        const fetchChangeJson = async () => {
            try {
                const response = await fetch(ChangeJsonUrl);
                const changeJson = await response.json();
                findMostFrequentNumber(changeJson);
            } catch (error) {
                console.error('Error fetching changeJson data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchChangeJson();
    }, [ChangeJsonUrl]);

    // 查找 id 中出现最多的数字
    const findMostFrequentNumber = (data) => {
        if (data && data.data) {
            const ids = Object.values(data.data).map((item) => item.id);
            const numbers = ids.flatMap((id) => id.match(/\d+/g) || []).map(Number);
            const frequency = numbers.reduce((acc, num) => {
                acc[num] = (acc[num] || 0) + 1;
                return acc;
            }, {});

            const mostFrequent = Object.keys(frequency).reduce((a, b) => (frequency[a] > frequency[b] ? a : b), null);
            setMostFrequentNumber(Number(mostFrequent));
        }
    };

    // 根据 mostFrequentNumber 过滤 cdragonData 中的数据
    useEffect(() => {
        const fetchCdragonData = async () => {
            if (mostFrequentNumber !== null) {
                try {
                    const response = await fetch(`https://raw.communitydragon.org/${shortVersion}/cdragon/tft/ko_kr.json`);
                    const cdragonData = await response.json();
                    const setData = cdragonData.setData || [];
                    const filtered = setData.filter((set) => set.number === mostFrequentNumber);

                    setFilteredData(filtered);

                    if (filtered.length > 0) {
                        const champions = filtered[0].champions || [];
                        const championDetails = champions
                            .filter((champion) => champion.traits && champion.traits.length > 0)
                            .map((champion) => ({
                                cost: champion.cost,
                                icon: `https://raw.communitydragon.org/${shortVersion}/game/${champion.tileIcon.toLowerCase().replace(/\.tex$/, '.png')}`,
                                name: champion.name,
                                traits: champion.traits,
                            }));
                        setChampionList(championDetails);
                    }
                } catch (error) {
                    console.error('Error fetching cdragonData:', error);
                }
            }
        };

        fetchCdragonData();
    }, [mostFrequentNumber]);

    //选择英雄
    const handleChampionSelect = (champion) => {
        setSelectedChampion(champion);
    };

    const handleHexClick = (rowIndex, colIndex) => {
        const updatedHexImages = [...hexImages];
        const updatedTraitsCount = { ...traitsCount };
        const updatedHexHidden = [...isHexHidden];

        if (updatedHexImages[rowIndex][colIndex]) {
            // 如果已存在图片，则移除，并更新 traits 计数
            const removedChampion = championList.find((champion) => champion.icon === updatedHexImages[rowIndex][colIndex]);
            if (removedChampion) {
                removedChampion.traits.forEach((trait) => {
                    if (updatedTraitsCount[trait]) {
                        updatedTraitsCount[trait]--;
                        if (updatedTraitsCount[trait] === 0) {
                            delete updatedTraitsCount[trait];
                        }
                    }
                });
            }
            updatedHexImages[rowIndex][colIndex] = null;
            updatedHexHidden[rowIndex][colIndex] = false;
        } else if (selectedChampion) {
            // 如果没有图片且选中了英雄，则添加图片，并更新 traits 计数
            updatedHexImages[rowIndex][colIndex] = selectedChampion.icon;
            updatedHexHidden[rowIndex][colIndex] = true; // 隐藏六边形，显示圆角图片
            selectedChampion.traits.forEach((trait) => {
                updatedTraitsCount[trait] = (updatedTraitsCount[trait] || 0) + 1;
            });
        }

        setHexImages(updatedHexImages);
        setTraitsCount(updatedTraitsCount);
        setIsHexHidden(updatedHexHidden);
    };


    //加载转圈
    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    //彩色边框
    const borderColor = (cost) => {
        switch (cost) {
            case 1:
                return 'silver';
            case 2:
                return 'green';
            case 3:
                return 'blue';
            case 4:
                return 'purple';
            case 5:
                return 'orange';
            default:
                return '#ccc';
        }
    };

    return (
        <View style={styles.container}>
            {/* 第一个部分 */}
            <View style={styles.traitsContent}>
                <View style={styles.traitsRow}>
                    {Object.keys(traitsCount).map((trait) => (
                        traitsImages[trait] ? (
                            <View key={trait} style={styles.traitItemContainer}>
                                <Image
                                    source={{ uri: traitsImages[trait] }}
                                    style={[styles.traitIcon, { tintColor: 'gray' }]} // traits 图标的样式
                                />
                                <Text style={styles.traitItem}>
                                    {trait}: {traitsCount[trait]}
                                </Text>
                            </View>
                        ) : null
                    ))}
                </View>
            </View>

            {/* 第二个部分：六边形展示 */}
            <View style={styles.mainContent}>
                <View style={styles.gridContainer}>
                    {Array.from({ length: numRows }).map((_, rowIndex) => (
                        <View key={rowIndex} style={[styles.hexRow, rowIndex % 2 !== 0 && { marginLeft: '11%' }]}>
                            {Array.from({ length: numCols }).map((_, colIndex) => (
                                <TouchableOpacity key={colIndex} onPress={() => handleHexClick(rowIndex, colIndex)}>
                                    {isHexHidden[rowIndex][colIndex] && hexImages[rowIndex][colIndex] ? (
                                        // 显示圆角的图片
                                        <Image
                                            source={{ uri: hexImages[rowIndex][colIndex] }}
                                            style={styles.roundedImage}
                                        />
                                    ) : (
                                        // 显示六边形
                                        <Svg height={hexHeight * 1.5} width={hexWidth}>
                                            <Polygon points={hexagonPoints} fill={hexImages[rowIndex][colIndex] ? 'none' : '#ccc'} stroke="#000" strokeWidth="1" />
                                            {hexImages[rowIndex][colIndex] && (
                                                <SvgImage
                                                    href={{ uri: hexImages[rowIndex][colIndex] }}
                                                    x="0"
                                                    y="0"
                                                    height={hexHeight * 1.5}
                                                    width={hexWidth}
                                                    clipPath="url(#hexagonClip)"
                                                />
                                            )}
                                        </Svg>
                                    )}
                                </TouchableOpacity>

                            ))}
                        </View>
                    ))}
                </View>
            </View>

            {/* 第三个部分 */}
            <View style={styles.mainContent}>
                <FlatList
                    data={championList}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={4}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleChampionSelect(item)}>
                            <View style={[styles.championItem, { borderColor: borderColor(item.cost) }]}>
                                <Image source={{ uri: item.icon }} style={styles.championIcon} />
                                <Text style={styles.championName}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SCREEN_WIDTH * 0.03,
        backgroundColor: 'white',
    },
    traitsContent: {
        padding: SCREEN_WIDTH * 0.02,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: SCREEN_HEIGHT * 0.02,
    },
    traitsText: {
        fontWeight: 'bold',
    },
    traitsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    traitIcon: {
        width: SCREEN_WIDTH * 0.06,
        height: SCREEN_WIDTH * 0.06,
        marginRight: SCREEN_WIDTH * 0.02,
    },
    traitItem: {
        fontSize: SCREEN_WIDTH * 0.035,
    },
    mainContent: {
        flex: 1,
        padding: SCREEN_WIDTH * 0.03,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: SCREEN_HEIGHT * 0.02,
    },
    gridContainer: {
        width: '97%',
        height: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
    },
    hexRow: {
        flexDirection: 'row',
        marginBottom: SCREEN_HEIGHT * -0.01,
    },
    championItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: SCREEN_WIDTH * 0.01,
        padding: SCREEN_WIDTH * 0.02,
        borderWidth: 2,
        borderRadius: 10,
    },
    championIcon: {
        width: SCREEN_WIDTH * 0.15,
        height: SCREEN_WIDTH * 0.15,
        marginBottom: 5,
    },
    championName: {
        fontSize: SCREEN_WIDTH * 0.03,
        textAlign: 'center',
    },
    roundedImage: {
        width: hexWidth,
        height: hexHeight,
        borderRadius: hexWidth / 4,
        borderWidth: 2,
        borderColor: 'black',
    },
});
