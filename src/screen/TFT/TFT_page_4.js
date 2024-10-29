import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';
import Svg, { Polygon, ClipPath, Defs } from 'react-native-svg';

const BASE_URL = 'https://raw.communitydragon.org/14.21/game/';
const Data_URL = 'https://raw.communitydragon.org/14.21/cdragon/tft/ko_kr.json';
const Traits_URL = 'https://ddragon.leagueoflegends.com/cdn/14.21.1/data/ko_KR/tft-trait.json';

const numRows = 4;
const numCols = 7;
const hexSize = 23;

const HexagonGrid = () => {
    const [gridData, setGridData] = useState(Array(numRows * numCols).fill(null));
    const [images, setImages] = useState([]);
    const [traitsData, setTraitsData] = useState({});
    const [traitsCount, setTraitsCount] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedHexagon, setSelectedHexagon] = useState(null);

    useEffect(() => {
        fetch(Data_URL)
            .then(response => response.json())
            .then(async data => {
                const set12 = data.setData.find(set => set.number === 12);
                if (set12) {
                    const champions = set12.champions || [];
                    const validImages = await Promise.all(
                        champions.map(async champion => {
                            const iconPath = champion.icon?.toLowerCase().replace(/\.tft_set12\.tex$/, '_mobile.tft_set12.png');
                            const imageUrl = `${BASE_URL}${iconPath}`;
                            return { uri: imageUrl, name: champion.name, cost: champion.cost, traits: champion.traits };
                        })
                    );
                    setImages(validImages.filter(img => img !== null && img.cost <= 5));
                }
            })
            .catch(console.error);

        fetch(Traits_URL)
            .then(response => response.json())
            .then(data => setTraitsData(data.data))
            .catch(console.error);
    }, []);

    const getFullFromTraitName = (traitName) => {
        const trait = Object.values(traitsData).find(trait => trait.name === traitName);
        return trait ? trait.image.full : null;
    };

    const handleImageRemove = (index) => {
        const newGridData = [...gridData];
        const removedImageUri = newGridData[index];
        newGridData[index] = null;
        setGridData(newGridData);

        if (removedImageUri) {
            const traits = removedImageUri.traits;
            traits.forEach(trait => {
                setTraitsCount(prevCount => {
                    const newCount = prevCount[trait] ? prevCount[trait] - 1 : 0;
                    return {
                        ...prevCount,
                        [trait]: newCount > 0 ? newCount : undefined // 如果计数为0，则移除该特质
                    };
                });
            });
        }
    };

    const handleSelectHexagon = (index) => {
        setSelectedHexagon(index);
        setModalVisible(true);
    };

    const handleImageSelect = (imageUri) => {
        if (selectedHexagon !== null) {
            const currentImageUri = gridData[selectedHexagon];

            // 如果该位置已有图像，避免多次记录
            if (currentImageUri) {
                return; // 直接返回，避免重复记录
            }

            const newGridData = [...gridData];
            newGridData[selectedHexagon] = imageUri; // 更新六边形的图像
            setGridData(newGridData);
            setModalVisible(false);

            // 更新特质计数，移除原有的特质记录
            const traitsToRemove = currentImageUri ? currentImageUri.traits : [];
            traitsToRemove.forEach(trait => {
                setTraitsCount(prevCount => {
                    const newCount = prevCount[trait] ? prevCount[trait] - 1 : 0;
                    return {
                        ...prevCount,
                        [trait]: newCount > 0 ? newCount : undefined // 如果计数为0，则移除该特质
                    };
                });
            });

            // 添加新选择的特质
            imageUri.traits.forEach(trait => {
                setTraitsCount(prevCount => ({
                    ...prevCount,
                    [trait]: (prevCount[trait] || 0) + 1 // 增加新特质的计数
                }));
            });
        }
    };

    const hexWidth = hexSize * 2;
    const hexHeight = Math.sqrt(3) * hexSize;

    const hexagonPoints = [
        `${hexWidth / 2},0`,
        `${hexWidth},${hexHeight / 4}`,
        `${hexWidth},${(3 * hexHeight) / 4}`,
        `${hexWidth / 2},${hexHeight}`,
        `0,${(3 * hexHeight) / 4}`,
        `0,${hexHeight / 4}`,
    ].join(" ");

    return (
        <View style={styles.container}>
            {/* traits展示部分 */}
            <View style={styles.traitsContainer}>
                {Object.entries(traitsCount).map(([trait, count]) => (
                    count > 0 && (
                        <View key={trait} style={styles.traitItem}>
                            <Image
                                source={{
                                    uri: `https://ddragon.leagueoflegends.com/cdn/14.21.1/img/tft-trait/${getFullFromTraitName(trait)}`,
                                }}
                                style={styles.traitImage}
                            />
                            <Text style={styles.traitText}>
                                {trait}: {count}
                            </Text>
                        </View>
                    )
                ))}
            </View>

            {/* 六边形展示区 */}
            {Array.from({ length: numRows }).map((_, rowIndex) => (
                <View key={rowIndex} style={styles.hexRow}>
                    {rowIndex % 2 !== 0 && <View style={{ width: hexSize }} />}
                    {Array.from({ length: numCols }).map((_, colIndex) => {
                        const index = rowIndex * numCols + colIndex;
                        const imageUri = gridData[index];
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => imageUri ? handleImageRemove(index) : handleSelectHexagon(index)}
                            >
                                <Svg height={hexSize * 2} width={hexSize * 2}>
                                    <Defs>
                                        <ClipPath id={`clip-${index}`}>
                                            <Polygon points={hexagonPoints} />
                                        </ClipPath>
                                    </Defs>
                                    <Polygon points={hexagonPoints} fill="#333" stroke="#666" strokeWidth="2" />
                                    {imageUri && (
                                        <Image 
                                            source={{ uri: imageUri.uri }} 
                                            style={[styles.hexImage, { clipPath: `url(#clip-${index})` }]} // 使用裁剪路径
                                        />
                                    )}
                                </Svg>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            ))}

            {/* 垂直滑动的图片展示区 */}
            <ScrollView style={styles.verticalScrollContainer}>
                <View style={styles.imageGrid}>
                    {images.sort((a, b) => b.cost - a.cost).map((img, index) => (
                        <View key={index} style={styles.imageContainer}>
                            <TouchableOpacity onPress={() => handleImageSelect(img)}>
                                <Image source={{ uri: img.uri }} style={styles.scrollImage} />
                                <Text style={styles.imageName}>{img.name}</Text>
                                <Text style={styles.costStars}>
                                    {Array.from({ length: img.cost }).map((_, starIndex) => (
                                        <Text key={starIndex} style={styles.star}>⭐</Text>
                                    ))}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'gray',
    },
    hexRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 1,
    },
    hexImage: {
        width: hexSize * 2,
        height: hexSize * 2,
        position: 'absolute',
        borderRadius: hexSize, // 半径为宽度的一半
    },
    verticalScrollContainer: {
        marginTop: 20,
        flex: 1,
    },
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    imageContainer: {
        width: width / 4 - 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    scrollImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    imageName: {
        textAlign: 'center',
        marginTop: 5,
    },
    costStars: {
        textAlign: 'center',
        marginTop: 5,
    },
    star: {
        fontSize: 16,
    },
    traitsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    traitItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    traitImage: {
        width: 24,
        height: 24,
        marginRight: 5,
    },
    traitText: {
        fontSize: 14,
    },
});

export default HexagonGrid;
