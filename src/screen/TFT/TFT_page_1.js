import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, StyleSheet, ActivityIndicator, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useVersion } from '../../VersionContext';
import { useCdragonData } from '../../CdragonDataContext';
import ChampionCard from '../TFT/championCard';

export default function Page1() {
    const version = useVersion();
    const { cdragonData, loading: cdragonLoading } = useCdragonData();
    const [champions, setChampions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTraits, setSelectedTraits] = useState([]); // 存储选中的羁绊

    const versionKey = 'version_page1';
    const championDataKey = 'championData_page1';
    const ChampionDataUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/tft-champion.json`;

    useEffect(() => {
        const fetchAndStoreChampionData = async () => {
            try {
                const storedVersion = await AsyncStorage.getItem(versionKey);

                if (storedVersion !== version) {
                    const championResponse = await fetch(ChampionDataUrl);
                    const championData = await championResponse.json();

                    await AsyncStorage.setItem(championDataKey, JSON.stringify(championData));
                    await AsyncStorage.setItem(versionKey, version);

                    setChampions(championData);
                } else {
                    const storedChampionData = await AsyncStorage.getItem(championDataKey);
                    setChampions(storedChampionData ? JSON.parse(storedChampionData) : []);
                }
            } catch (error) {
                console.error("Error fetching or storing champions:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAndStoreChampionData();
    }, [version]);

    if (loading || cdragonLoading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    const filteredChampionList = champions.data
        ? Object.values(champions.data).reduce((uniqueChampions, champion) => {
            const matchedData = cdragonData.setData
                ?.flatMap(set => set.champions)
                .find(item => item.name === champion.name && /^TFT12_/.test(item.apiName));

            if (matchedData && !uniqueChampions.has(champion.name)) {
                uniqueChampions.set(champion.name, { ...champion, matchedData, cdragonData });
            }

            return uniqueChampions;
        }, new Map()).values()
        : [];

    const uniqueChampionList = Array.from(filteredChampionList);

    const searchFilteredChampionList = uniqueChampionList.filter(champion => {
        const matchesSearchQuery = champion.name.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesSelectedTraits = selectedTraits.length === 0 || selectedTraits.every(
            trait => champion.matchedData.traits && champion.matchedData.traits.includes(trait)
        );

        return matchesSearchQuery && matchesSelectedTraits;
    });

    const getIconUrl = (path) => path
        ? `https://raw.communitydragon.org/latest/game/${path.toLowerCase().replace('.tex', '.png')}`
        : null;

    // Trait 滚动条
    const handleTraitPress = (traitName) => {
        setSelectedTraits(prevSelectedTraits => {
            if (prevSelectedTraits.includes(traitName)) {
                return prevSelectedTraits.filter(trait => trait !== traitName);
            } else {
                return [...prevSelectedTraits, traitName];
            }
        });
    };

    const renderTraitScrollBar = () => (
        <ScrollView horizontal style={styles.traitScrollContainer} showsHorizontalScrollIndicator={false}>
            {cdragonData.sets["12"].traits.map((trait, index) => {
                const isSelected = selectedTraits.includes(trait.name);

                return (
                    <TouchableOpacity key={index} onPress={() => handleTraitPress(trait.name)} style={styles.traitItem}>
                        <Image
                            source={{ uri: getIconUrl(trait.icon) }}
                            style={[styles.traitIcon, { tintColor: isSelected ? 'gold' : 'gray' }]}
                        />
                        <Text style={[styles.traitText, { color: isSelected ? 'gold' : '#333' }]}>{trait.name}</Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );

    return (
        <View style={styles.container}>
            <View style={styles.mainContent}>
                <TextInput
                    style={styles.searchBox}
                    placeholder="챔피언 이름"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                {renderTraitScrollBar()}

                <FlatList
                    data={searchFilteredChampionList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <ChampionCard
                            champion={item}
                            matchedData={item.matchedData}
                            cdragonData={item.cdragonData}
                            shortVersion={version.split('.').slice(0, 2).join('.')}
                        />
                    )}
                    contentContainerStyle={styles.flatListContent} // 添加内容容器样式
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    traitScrollContainer: {
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    traitItem: {
        alignItems: 'center',
        marginHorizontal: 8,
    },
    traitIcon: {
        width: 30,
        height: 30,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    traitText: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 4,
        color: '#333',
    },
    mainContent: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    searchBox: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    flatListContent: {
        paddingTop: 10,
        justifyContent: 'flex-start', // 确保内容从上到下排列
    },
});
