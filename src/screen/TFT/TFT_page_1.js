import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tab1_show from './TFT_show/TFT_tab_1_show';  // 确保你有正确的 tab1_show 文件路径
import { useVersion } from '../../VersionContext';

const { width, height } = Dimensions.get('window');
const Stack = createStackNavigator();
// 合并后的主页面，包含 Stack Navigator
export default function Tab1Page() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Tab1}
        options={{ headerShown: false }}  // 隐藏头部导航
      />
      <Stack.Screen
        name="TFT_tab_1_show"
        component={Tab1_show}  // 导入的详细页面
        options={{ headerShown: false }}  // 隐藏头部导航
      />
    </Stack.Navigator>
  );
}

function Tab1({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [traits, setTraits] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);






  {/*版本号部分 
  const shortVersion = useVersion() ? useVersion.slice(0, 4) : ''; 
  console.log(shortVersion);
  
  const BASE_URL = `https://raw.communitydragon.org/${shortVersion}/game/`;
  const Data_URL = `https://raw.communitydragon.org/${shortVersion}/cdragon/tft/ko_kr.json`;
  */}

  const BASE_URL = `https://raw.communitydragon.org/14.21/game/`;
  const Data_URL = `https://raw.communitydragon.org/14.21/cdragon/tft/ko_kr.json`;







  useEffect(() => {
    fetch(Data_URL)
      .then(response => response.json())
      .then(async data => {
        const set12 = data.setData.find(set => set.number === 12);
        if (set12) {
          const champions = set12.champions || [];
          const validChampions = await Promise.all(
            champions.map(async (champion) => {
              const iconPath = champion.icon?.toLowerCase().replace(/\.tft_set12\.tex$/, '_mobile.tft_set12.png');
              const imageUrl = `${BASE_URL}${iconPath}`;

              try {
                const res = await fetch(imageUrl);
                if (res.ok) return champion;
                return null;
              } catch (error) {
                return null;
              }
            })
          );
          const validChampionsList = validChampions.filter(champion => champion !== null);
          setItems(validChampionsList);
          setFilteredItems(validChampionsList);
          const allTraits = validChampionsList.flatMap(champion => champion.traits || []);
          const uniqueTraits = [...new Set(allTraits)];
          setTraits(uniqueTraits);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // 搜索函数
  const searchItems = (text) => {
    setSearchText(text);
    const filtered = items.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredItems(filtered);
  };

  // 筛选函数
  const filterItems = (filterTrait) => {
    setSelectedFilter(filterTrait);
    const filtered = items.filter(item => item.traits.includes(filterTrait));
    setFilteredItems(filtered);
  };

  // 清除筛选函数
  const clearFilter = () => {
    setSelectedFilter(null);
    setFilteredItems(items);
  };

  // 点击事件，导航到详细信息页面并传递数据
  const handlePress = (item) => {
    navigation.navigate('TFT_tab_1_show', { champion: item });  // 导航并传递参数
  };

  // 渲染每个 champion 的 characterName 和图标
  const renderItem = (item, index) => {
    const iconPath = item.icon?.toLowerCase().replace(/\.tft_set12\.tex$/, '_mobile.tft_set12.png');
    const imageUrl = `${BASE_URL}${iconPath}`;

    return (
      <TouchableOpacity key={index} onPress={() => handlePress(item)}>
        <View style={styles.itemContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text>{item.name} Cost {item.cost}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <View style={styles.sidebar}>
          <Text style={styles.filterTitle}>羁绊</Text>
          {traits.length > 0 ? (
            <>
              {traits.map((trait, index) => (
                <Button key={index} title={trait} onPress={() => filterItems(trait)} />
              ))}
              <Button title="清除筛选" onPress={clearFilter} color="red" />
            </>
          ) : (
            <Text>waitting</Text>
          )}
        </View>
        <View style={styles.mainContent}>
          <TextInput
            style={styles.searchBar}
            placeholder="搜索..."
            value={searchText}
            onChangeText={text => searchItems(text)}
          />
          {filteredItems.map((item, index) => renderItem(item, index))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexDirection: 'row', // 使两部分横向排列
    flexGrow: 1, // 确保两部分都可以正确伸展
  },
  container: {
    flexDirection: 'row',
    flex: 1, // 让容器占满整个 ScrollView
  },
  sidebar: {
    width: width * 0.15,  // 调整为占屏幕宽度的 15%
    backgroundColor: '#f0f0f0',
    padding: height * 0.01,  // 动态设置 padding
  },
  filterTitle: {
    fontSize: height * 0.02,  // 动态字体大小
    marginBottom: height * 0.02,  // 动态 margin
  },
  mainContent: {
    flex: 1, // 让右侧内容占满剩余空间
    padding: height * 0.02,  // 动态 padding
  },
  searchBar: {
    height: height * 0.06,  // 动态设置高度
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: height * 0.02,  // 动态 margin
    paddingHorizontal: width * 0.03,  // 动态 padding
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: height * 0.02,  // 动态 padding
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: width * 0.1, // 动态设置图片宽度
    height: width * 0.1, // 动态设置图片高度，保持为正方形
    marginRight: width * 0.03, // 动态 margin 以便文本和图片之间保持距离
  },
});
