import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, StyleSheet, ActivityIndicator, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useVersion } from '../../VersionContext';
import ItemCard from '../TFT/ItemCard';

export default function EquipmentScreen() {
    const version = useVersion(); // 从 context 获取完整的版本信息
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState(''); // 新增状态来保存搜索文本

    // 获取短版本号（例如从 '14.21.1' 提取 '14.21'）
    const shortVersion = version.split('.').slice(0, 2).join('.');

    // 定义 Riot 和 Community Dragon API 的 URL
    const RiotUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/tft-item.json`;
    const CdataUrl = `https://raw.communitydragon.org/${shortVersion}/cdragon/tft/ko_kr.json`;

    useEffect(() => {
        const fetchAndStoreData = async () => {
            try {
                const storedVersion = await AsyncStorage.getItem('version');

                if (storedVersion !== version) {
                    const riotResponse = await fetch(RiotUrl);
                    const riotData = await riotResponse.json();

                    const cdragonResponse = await fetch(CdataUrl);
                    const cdragonData = await cdragonResponse.json();

                    await AsyncStorage.setItem('riotData', JSON.stringify(riotData));
                    await AsyncStorage.setItem('cdragonData', JSON.stringify(cdragonData));
                    await AsyncStorage.setItem('version', version);

                    setItems({ riotData, cdragonData });
                } else {
                    const storedRiotData = await AsyncStorage.getItem('riotData');
                    const storedCdragonData = await AsyncStorage.getItem('cdragonData');
                    setItems({
                        riotData: storedRiotData ? JSON.parse(storedRiotData) : [],
                        cdragonData: storedCdragonData ? JSON.parse(storedCdragonData) : [],
                    });
                }
            } catch (error) {
                console.error("Error fetching or storing items:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAndStoreData();
    }, [version]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    // 提取所有装备名称并找到对应的数据，同时避免重复
    const seenNames = new Set();
    const excludedNames = [
        '', // 排除空字符串
        ' ', // 排除仅为空格的字符串
        'MissingNo',
        '휴대용 고통',
        '적의 눈물',
        '망치 날리기',
        '내가 누군지 알아?',
        '사용할 수 없는 슬릇',
        '펭구의 보호',
        '치명타!',
        '피해 증폭',
        '에이스',
        '도발',
    ];

    const equipmentList = items.riotData?.data
        ? Object.values(items.riotData.data)
            .map(item => {
                const name = item.name;

                // 检查名称是否为空或在排除列表中
                if (!name || name.trim() === '' || excludedNames.includes(name)) {
                    return null; // 返回 null，表示不添加该项
                }

                if (seenNames.has(name)) return null;
                seenNames.add(name);

                const matchedData = items.cdragonData.items.find(cItem => cItem.name === name);

                // 确认 apiName 符合要求
                if (matchedData && matchedData.apiName.split('_')[1] === 'Item') {
                    return { ...item, ...matchedData }; // 合并两个数据源中的数据
                }
                return null; // 不符合要求，返回 null
            })
            .filter(item => item !== null) // 过滤掉 null
        : [];

    // 根据搜索文本过滤装备列表
    const filteredEquipmentList = equipmentList.filter(item => {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase()); // 模糊匹配
    });

    return (
        <View style={styles.container}>
            <View style={styles.sidebar}>
                <Text style={styles.sidebarText}>筛选</Text>
                <Text style={styles.sidebarText}>(装备的类型等)</Text>
            </View>

            <View style={styles.mainContent}>
                <TextInput
                    style={styles.searchBox}
                    placeholder="搜索装备名称"
                    value={searchQuery}
                    onChangeText={setSearchQuery} // 更新搜索文本
                />

                <FlatList
                    data={filteredEquipmentList} // 使用过滤后的列表
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <ItemCard version={version} item={item} shortVersion={shortVersion} cdragonData={items.cdragonData} />
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    sidebar: {
        width: 60,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    sidebarText: {
        fontSize: 12,
        marginVertical: 5,
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
