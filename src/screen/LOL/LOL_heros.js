// src/screen/LOL/lol_hero.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { ICON_DATA, filterIconsByName } from '../../components/LOL/LOL_hero_icons';
import { createStackNavigator } from '@react-navigation/stack';
import LOLHeroShow from './LOL_show/LOL_hero_show';

const Stack = createStackNavigator();

// 英雄列表页面
const LOLHeroList = ({ navigation, route }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(ICON_DATA);

    // 获取 setSwipeEnabled 函数并在页面加载时启用滑动
    const { setSwipeEnabled } = route?.params || {};  // 确保 route.params 存在

    useEffect(() => {
      if (setSwipeEnabled) {
        setSwipeEnabled(true);  // 启用滑动
      }
      return () => setSwipeEnabled && setSwipeEnabled(true);  // 返回时启用滑动
    }, [setSwipeEnabled]);

    // 处理搜索
    const handleSearch = (text) => {
      setSearchQuery(text);
      setFilteredData(filterIconsByName(text));
    };

    // 点击图标时禁用滑动
    const handleIconPress = (item) => {
      if (setSwipeEnabled) {
        setSwipeEnabled(false);  // 禁用滑动
      }
      navigation.navigate('HeroDetail', { item });
    };

    const renderIconItem = ({ item }) => (
      <TouchableOpacity
        onPress={() => handleIconPress(item)}  // 点击时禁用滑动
        style={styles.iconContainer}
      >
        <Image source={item.image} style={styles.iconImage} />
        <Text>{item.description}</Text>
      </TouchableOpacity>
    );

    // 筛选功能: 按照分路进行筛选
    const handleFilterByCharacterTop = () => {
      setFilteredData(ICON_DATA.filter(item => item.name.includes('top')));
    };

    const handleFilterByCharacterMid = () => {
      setFilteredData(ICON_DATA.filter(item => item.name.includes('mid')));
    };

    const handleFilterByCharacterJug = () => {
      setFilteredData(ICON_DATA.filter(item => item.name.includes('jug')));
    };

    const handleFilterByCharacterADc = () => {
      setFilteredData(ICON_DATA.filter(item => item.name.includes('adc')));
    };

    const handleFilterByCharacterSup = () => {
      setFilteredData(ICON_DATA.filter(item => item.name.includes('sup')));
    };

    // reset按钮
    const resetFilter = () => {
      setFilteredData(ICON_DATA);  // 重置为初始数据
    };

    return (
      <View style={styles.gridContainer}>
        {/* 筛选栏移至左侧 */}
        <View style={styles.filterBar}>
          <Text> search road</Text>
          <TouchableOpacity onPress={handleFilterByCharacterTop} style={styles.filterButton}>
            <Text>Top</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFilterByCharacterMid} style={styles.filterButton}>
            <Text>Mid</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFilterByCharacterJug} style={styles.filterButton}>
            <Text>Jug</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFilterByCharacterADc} style={styles.filterButton}>
            <Text>ADc</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFilterByCharacterSup} style={styles.filterButton}>
            <Text>Sup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={resetFilter} style={styles.filterButton}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>

        {/* 图标展示区 */}
        <View style={styles.iconListContainer}>
          {/* 搜索栏 */}
          <TextInput
            style={styles.searchBar}
            placeholder="Search Hero..."
            value={searchQuery}
            onChangeText={handleSearch}
          />

          {/* 图标列表 */}
          <FlatList
            data={filteredData}
            renderItem={renderIconItem}
            keyExtractor={item => item.id}
            numColumns={4}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      </View>
    );
};

// 将 Stack Navigator 放入这个页面，处理页面之间的导航
const LOLHeroScreen = ({ route }) => {
    const { setSwipeEnabled } = route?.params || {}; // 这里确保我们从Tab Navigator传递了参数
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="HeroList"
          component={LOLHeroList}
          options={{ title: 'Heroes' }}
          initialParams={{ setSwipeEnabled }}  // 将 setSwipeEnabled 传递给子页面
        />
        <Stack.Screen
          name="HeroDetail"
          component={LOLHeroShow}
          options={{ title: 'Hero Detail' }}
        />
      </Stack.Navigator>
    );
};


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    flexDirection: 'row',  // 筛选栏和图标列表横向排列
  },
  filterBar: {
    width: width * 0.21,  // 筛选栏占据屏幕宽度的21%
    backgroundColor: '#f0f0f0',
    padding: height * 0.02,  // 动态高度的padding
    alignItems: 'flex-start',  // 左对齐
  },
  filterButton: {
    padding: height * 0.015,  // 动态按钮内边距
    backgroundColor: '#ddd',
    borderRadius: width * 0.02,  // 动态圆角半径
    marginVertical: height * 0.01,  // 动态按钮之间的间距
    width: '100%',
    alignItems: 'center',
  },
  iconListContainer: {
    flex: 1,  // 剩余部分给图标列表
    padding: width * 0.025,  // 动态外边距
  },
  searchBar: {
    height: height * 0.05,  // 搜索栏的高度相对于屏幕高度
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: width * 0.02,  // 动态圆角半径
    paddingLeft: width * 0.03,  // 动态左边内边距
    marginBottom: height * 0.02,  // 动态底部间距
    backgroundColor: '#fff',
  },
  flatListContent: {
    paddingBottom: height * 0.05,  // 动态底部内边距
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: width * 0.01,  // 动态外边距
  },
  iconImage: {
    width: width * 0.15,  // 动态图片宽度（占屏幕宽度的15%）
    height: width * 0.15,  // 保持图片为正方形
    marginBottom: height * 0.01,  // 动态底部间距
  },
});


export default LOLHeroScreen;
