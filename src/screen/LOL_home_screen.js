import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// 模拟的图标数据
const ICON_DATA = [
  { id: '1', name: 'Champion1', image: require('../assets/images/champion1.png') },
  { id: '2', name: 'Champion2', image: require('../assets/images/champion2.png') },
  { id: '3', name: 'Champion3', image: require('../assets/images/champion3.png') },
  { id: '4', name: 'Champion4', image: require('../assets/images/champion4.png') },
  { id: '5', name: 'Champion5', image: require('../assets/images/champion5.png') },
  // 添加更多图标...
];

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

// 图标页面
const IconGridScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(ICON_DATA);

  // 处理搜索
  const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredIcons = ICON_DATA.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(filteredIcons);
  };

  const renderIconItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('IconDetail', { item })} style={styles.iconContainer}>
      <Image source={item.image} style={styles.iconImage} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.gridContainer}>
      {/* 搜索栏 */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search icons..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {/* 筛选栏：这里是一个简单的占位符 */}
      <View style={styles.filterBar}>
        <Text>Filter Options (left sidebar)</Text>
      </View>
      {/* 图标列表 */}
      <FlatList
        data={filteredData}
        renderItem={renderIconItem}
        keyExtractor={item => item.id}
        numColumns={4}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

// 图标详情页面
const IconDetailScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={styles.detailContainer}>
      <Image source={item.image} style={styles.detailImage} />
      <Text style={styles.detailText}>Name: {item.name}</Text>
    </View>
  );
};

// 顶部 Tab Navigator
const TopTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Tab1" component={IconGridScreen} options={{ title: 'Tab 1' }} />
    <Tab.Screen name="Tab2" component={IconGridScreen} options={{ title: 'Tab 2' }} />
    <Tab.Screen name="Tab3" component={IconGridScreen} options={{ title: 'Tab 3' }} />
  </Tab.Navigator>
);

// Stack Navigator
const LOLHomeScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="TopTabs" component={TopTabNavigator} />
    <Stack.Screen name="IconDetail" component={IconDetailScreen} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  filterBar: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  iconImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailImage: {
    width: 100,
    height: 100,
  },
  detailText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default LOLHomeScreen;
