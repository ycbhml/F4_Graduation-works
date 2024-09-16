import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { ICON_DATA, filterIconsByName } from '../../components/LOL/LOL_items';  // 引入物品数据

const LOLItemSelection = ({ navigation, route }) => {
  const { selectedSlot } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(ICON_DATA);
  const [numColumns, setNumColumns] = useState(4); // 初始列数为 4

  // 搜索物品
  const handleSearch = (text) => {
    setSearchQuery(text);
    setFilteredData(filterIconsByName(text));
  };

  // 选择物品并返回
  const handleItemSelect = (item) => {
    navigation.navigate('HeroCalculator', { selectedItemId: item.id, selectedSlot });
  };

  // 筛选物品
  const filterByType = (type) => {
    setFilteredData(ICON_DATA.filter(item => item.name.includes(type)));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemSelect(item)} style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.gridContainer}>
        {/* 筛选栏 */}
        <View style={styles.filterBar}>
          <Text>Search Filter</Text>
          <TouchableOpacity onPress={() => filterByType('warrior')} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/warrior.png')} style={styles.filterIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => filterByType('mage')} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/mage.png')} style={styles.filterIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => filterByType('assassin')} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/assassin.png')} style={styles.filterIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => filterByType('support')} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/support.png')} style={styles.filterIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => filterByType('shooter')} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/shooter.png')} style={styles.filterIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => filterByType('tank')} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/tank.png')} style={styles.filterIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFilteredData(ICON_DATA)} style={styles.filterButton}>
            <Text>All</Text>
          </TouchableOpacity>
        </View>

        {/* 图标展示区 */}
        <View style={styles.iconListContainer}>
          {/* 搜索栏 */}
          <TextInput
            style={styles.searchBar}
            placeholder="Search Item..."
            value={searchQuery}
            onChangeText={handleSearch}
          />

          {/* 图标列表 */}
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={numColumns}  // 动态列数
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    flexDirection: 'row',  // 筛选栏和图标列表横向排列
  },
  filterBar: {
    width: width * 0.21,
    backgroundColor: '#f0f0f0',
    padding: height * 0.02,
    alignItems: 'flex-start',
  },
  filterButton: {
    padding: height * 0.015,
    backgroundColor: '#ddd',
    borderRadius: width * 0.02,
    marginVertical: height * 0.01,
    width: '100%',
    alignItems: 'center',
  },
  filterIcon: {
    width: width * 0.08,  // 图片宽度动态调整
    height: width * 0.08, // 图片高度保持为正方形
    alignItems: 'center',
  },
  iconListContainer: {
    flex: 1,
    padding: width * 0.025,
  },
  searchBar: {
    height: height * 0.05,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: width * 0.02,
    paddingLeft: width * 0.03,
    marginBottom: height * 0.02,
    backgroundColor: '#fff',
  },
  flatListContent: {
    paddingBottom: height * 0.05,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: width * 0.01,  // 图标之间的间距
  },
  itemImage: {
    width: width * 0.15,  // 动态图片宽度（占屏幕宽度的15%）
    height: width * 0.15,  // 保持图片为正方形
    marginBottom: height * 0.01,  // 动态底部间距
  },
});

export default LOLItemSelection;
