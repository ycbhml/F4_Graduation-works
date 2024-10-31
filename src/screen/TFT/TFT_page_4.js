import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Polygon, ClipPath, Defs, Image as SvgImage } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useVersion } from '../../VersionContext';
import { useCdragonData } from '../../CdragonDataContext';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const hexSize = SCREEN_WIDTH * 0.055;
const hexWidth = hexSize * 2;
const hexHeight = Math.sqrt(3) * hexSize;
const hexMargin = hexSize * 0.05;
const numRows = 4;
const numCols = 7;

export default function Page4() {
    const hexagonPoints = [
        `${hexWidth / 2},0`,
        `${hexWidth},${hexHeight / 4}`,
        `${hexWidth},${(3 * hexHeight) / 4}`,
        `${hexWidth / 2},${hexHeight}`,
        `0,${(3 * hexHeight) / 4}`,
        `0,${hexHeight / 4}`
    ].join(' ');

    const version = useVersion();
    const shortVersion = version.split('.').slice(0, 2).join('.');

    const [loading, setLoading] = useState(true);
    const [mostFrequentNumber, setMostFrequentNumber] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [championList, setChampionList] = useState([]);
    const [selectedChampion, setSelectedChampion] = useState(null);
    const [hexImages, setHexImages] = useState(Array(numRows).fill(null).map(() => Array(numCols).fill(null)));
    const [hexCosts, setHexCosts] = useState(Array(numRows).fill(null).map(() => Array(numCols).fill(null))); // 新增
    const [traitsCount, setTraitsCount] = useState({});
    const [traitsImages, setTraitsImages] = useState({});
    const [isHexHidden, setIsHexHidden] = useState(Array(numRows).fill(null).map(() => Array(numCols).fill(false)));

    // 获取 trait 图标
    useEffect(() => {
        const fetchTraitJson = async () => {
            try {
                const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/tft-trait.json`);
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
    }, [version]);

    // 获取 champion 数据
    useEffect(() => {
        const fetchChangeJson = async () => {
            try {
                const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/tft-champion.json`);
                const changeJson = await response.json();
                findMostFrequentNumber(changeJson);
            } catch (error) {
                console.error('Error fetching changeJson data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchChangeJson();
    }, [version]);

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

    const handleChampionSelect = (champion) => {
        setSelectedChampion(champion);
    };

    // 设置六边形的图像和边框颜色
    const handleHexClick = (rowIndex, colIndex) => {
        const updatedHexImages = [...hexImages];
        const updatedHexCosts = [...hexCosts];
        const updatedTraitsCount = { ...traitsCount };
        const updatedHexHidden = [...isHexHidden];

        if (updatedHexImages[rowIndex][colIndex]) {
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
            updatedHexCosts[rowIndex][colIndex] = null;
            updatedHexHidden[rowIndex][colIndex] = false;
        } else if (selectedChampion) {
            updatedHexImages[rowIndex][colIndex] = selectedChampion.icon;
            updatedHexCosts[rowIndex][colIndex] = selectedChampion.cost;
            updatedHexHidden[rowIndex][colIndex] = true;
            selectedChampion.traits.forEach((trait) => {
                updatedTraitsCount[trait] = (updatedTraitsCount[trait] || 0) + 1;
            });
        }

        setHexImages(updatedHexImages);
        setHexCosts(updatedHexCosts);
        setTraitsCount(updatedTraitsCount);
        setIsHexHidden(updatedHexHidden);
    };

    const getBorderColor = (cost) => {
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

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.traitsContent}>
                <View style={styles.traitsRow}>
                    {Object.keys(traitsCount).map((trait) => (
                        traitsImages[trait] ? (
                            <View key={trait} style={styles.traitItemContainer}>
                                <Image
                                    source={{ uri: traitsImages[trait] }}
                                    style={[styles.traitIcon, { tintColor: 'gray' }]}
                                />
                                <Text style={styles.traitItem}>
                                    {trait}: {traitsCount[trait]}
                                </Text>
                            </View>
                        ) : null
                    ))}
                </View>
            </View>

            <View style={styles.mainContentTo6}>
                <View style={styles.gridContainer}>
                    {Array.from({ length: numRows }).map((_, rowIndex) => (
                        <View
                            key={rowIndex}
                            style={[
                                styles.hexRow,
                                { marginLeft: rowIndex % 2 === 0 ? -hexWidth / 2 : hexWidth / 2 } // 偏移设置
                            ]}
                        >
                            {Array.from({ length: numCols }).map((_, colIndex) => (
                                <TouchableOpacity key={colIndex} onPress={() => handleHexClick(rowIndex, colIndex)}>
                                    <Svg height={hexHeight + hexMargin} width={hexWidth + hexMargin}>
                                        <Defs>
                                            <ClipPath id={`clip-${rowIndex}-${colIndex}`}>
                                                <Polygon points={hexagonPoints} />
                                            </ClipPath>
                                        </Defs>
                                        {hexImages[rowIndex][colIndex] ? (
                                            <>
                                                <SvgImage
                                                    href={{ uri: hexImages[rowIndex][colIndex] }}
                                                    width={hexWidth * 1.1} // 将图片放大 10%
                                                    height={hexHeight * 1.1}
                                                    x={-hexWidth * 0.05} // 向左偏移 10% 保持居中
                                                    y={-hexHeight * 0.05} // 向上偏移 10% 保持居中
                                                    clipPath={`url(#clip-${rowIndex}-${colIndex})`}
                                                    style={styles.hexImage}
                                                />
                                                {/* 在图像上叠加边框 */}
                                                <Polygon
                                                    points={hexagonPoints}
                                                    fill="none"
                                                    stroke={getBorderColor(hexCosts[rowIndex][colIndex])} // 根据 cost 设置边框颜色
                                                    strokeWidth="2" // 边框厚度
                                                />
                                            </>
                                        ) : (
                                            <Polygon points={hexagonPoints} fill="#ccc" stroke="#000" strokeWidth="1" style={styles.hexImage} />
                                        )}
                                    </Svg>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}
                </View>
            </View>




            <View style={styles.mainContent}>
                <FlatList
                    data={championList}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={4}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleChampionSelect(item)}>
                            <View style={[styles.championItem, { borderColor: getBorderColor(item.cost) }]}>
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
    traitsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    traitIcon: {
        width: SCREEN_WIDTH * 0.06,
        height: SCREEN_WIDTH * 0.06,
        marginRight: SCREEN_WIDTH * 0.02,
    },
    mainContentTo6: {
        paddingVertical: SCREEN_HEIGHT * 0.01,
        paddingHorizontal: SCREEN_WIDTH * 0.03,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: SCREEN_HEIGHT * 0.02,
        height: SCREEN_HEIGHT * 0.22,
        alignItems: 'center',
    },
    gridContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    hexRow: {
        flexDirection: 'row',
        marginBottom: hexHeight * 0.05,
    },
    hexImage: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 2,
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
        marginBottom: 3,
    },
    championName: {
        fontSize: SCREEN_WIDTH * 0.03,
        textAlign: 'center',
    },
});
