import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';
import { HERO_DATA, filterHeroesByName } from '../../components/LOL/LOL_hero_icons'; // 假设英雄数据来源

// 获取屏幕宽高
const { width, height } = Dimensions.get('window');

const HeroSelectionScreen = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(HERO_DATA);

  const { setSwipeEnabled } = route.params || {}; // 从父级路由接收 setSwipeEnabled

  useEffect(() => {
    // 进入英雄选择页面时禁用滑动
    if (setSwipeEnabled) {
      setSwipeEnabled(false);
    }
    return () => {
      // 离开页面时启用滑动
      if (setSwipeEnabled) {
        setSwipeEnabled(true);
      }
    };
  }, [setSwipeEnabled]);

  // 搜索英雄
  const handleSearch = (text) => {
    setSearchQuery(text);
    setFilteredData(filterHeroesByName(text));
  };

  // 选择英雄并跳转到新的页面
  const handleHeroSelect = (item) => {
    navigation.navigate('HeroCalculator', { 
      item, 
      setSwipeEnabled,
      callback: (data) => {
        console.log('Data returned from LOLCalcShow:', data);
      }
    }); 
  };

  const renderIconItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleHeroSelect(item)} style={styles.iconContainer}>
      <Image source={item.image} style={styles.iconImage} />
      <Text>{item.description}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.gridContainer}>

      {/* 筛选栏 */}
      <View style={styles.filterBar}>
        <TouchableOpacity onPress={() => filterByRole('top')} style={styles.filterButton}>
          <Image source={require('../../assets/images/lol/top.png')} style={styles.filterIcon} />
          <Text>Top</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterByRole('mid')} style={styles.filterButton}>
          <Image source={require('../../assets/images/lol/mid.png')} style={styles.filterIcon} />
          <Text>Mid</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterByRole('jug')} style={styles.filterButton}>
          <Image source={require('../../assets/images/lol/jug.png')} style={styles.filterIcon} />
          <Text>Jug</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterByRole('adc')} style={styles.filterButton}>
          <Image source={require('../../assets/images/lol/adc.png')} style={styles.filterIcon} />
          <Text>ADc</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterByRole('sup')} style={styles.filterButton}>
          <Image source={require('../../assets/images/lol/sup.png')} style={styles.filterIcon} />
          <Text>Sup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilteredData(heroInfo)} style={styles.filterButton}>
          <Text>All</Text>
        </TouchableOpacity>
      </View>

      {/* 图标展示区 */}
      <View style={styles.iconListContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search Hero..."
            value={searchQuery}
            onChangeText={handleSearch}
          />

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



// 样式表
const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
    },
    gridContainer: {
      flexDirection: 'row',
      flex: 1,
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
      width: width * 0.08,
      height: width * 0.08,
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
    iconContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: width * 0.01,
    },
    iconImage: {
      width: width * 0.15,
      height: width * 0.15,
      marginBottom: height * 0.01,
    },
});

export default HeroSelectionScreen;