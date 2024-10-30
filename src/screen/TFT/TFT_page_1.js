import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useVersion } from '../../VersionContext';
import { useCdragonData } from '../../CdragonDataContext'; // 引入全局 CdragonDataContext
import ChampionCard from '../TFT/championCard';

export default function Page1() {
    const version = useVersion(); // 从 VersionContext 获取完整的版本信息
    const { cdragonData, loading: cdragonLoading } = useCdragonData(); // 使用全局的 cdragonData
    const [champions, setChampions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    // 为 Page1 定义独立的 AsyncStorage 键名
    const versionKey = 'version_page1';
    const championDataKey = 'championData_page1';

    // 定义 API 的 URL
    const ChampionDataUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/tft-champion.json`;

    useEffect(() => {
        const fetchAndStoreChampionData = async () => {
            try {
                const storedVersion = await AsyncStorage.getItem(versionKey);

                if (storedVersion !== version) {
                    // 获取新的 championData 数据并存储
                    const championResponse = await fetch(ChampionDataUrl);
                    const championData = await championResponse.json();

                    await AsyncStorage.setItem(championDataKey, JSON.stringify(championData));
                    await AsyncStorage.setItem(versionKey, version);

                    setChampions(championData);
                } else {
                    // 读取缓存的 championData 数据
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

    // 优化后的筛选逻辑：查找名称相同且 apiName 以 "TFT12" 开头的英雄数据
    const filteredChampionList = champions.data
        ? Object.values(champions.data).map(champion => {
              // 从 cdragonData 中查找名称匹配的英雄，且 apiName 前缀为 "TFT12"
              const matchedData = cdragonData.setData
                  ?.flatMap(set => set.champions)
                  .find(item => item.name === champion.name && /^TFT12_/.test(item.apiName));

              // 如果找到匹配项，将 matchedData 和 cdragonData 传递给组件
              return matchedData ? { ...champion, matchedData, cdragonData } : null;
          }).filter(item => item !== null) // 过滤掉不匹配的项
        : [];

    // 根据搜索文本进一步过滤
    const searchFilteredChampionList = filteredChampionList.filter(champion =>
        champion.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <View style={styles.mainContent}>
                <TextInput
                    style={styles.searchBox}
                    placeholder="搜索英雄名称"
                    value={searchQuery}
                    onChangeText={setSearchQuery} // 更新搜索文本
                />

                <FlatList
                    data={searchFilteredChampionList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <ChampionCard
                            champion={item} // 传递英雄数据
                            matchedData={item.matchedData} // 传递 CdataUrl 中匹配的完整数据
                            cdragonData={item.cdragonData} // 传递完整的 cdragonData
                            shortVersion={version.split('.').slice(0, 2).join('.')}
                        />
                    )}
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
});
