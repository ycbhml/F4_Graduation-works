import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions, Text, ScrollView } from 'react-native';
import { ITEMS_DATA, filterIconsByTags, filterIconsByName } from '../../components/LOL/LOL_items';
import { createStackNavigator } from '@react-navigation/stack';
import LOLitemshow from './LOL_show/LOL_item_show';

const Stack = createStackNavigator();

// 项目列表页面
const LOLItemList = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(ITEMS_DATA);
  const [numColumns, setNumColumns] = useState(4); // 初始列数为 4

  const { setSwipeEnabled } = route?.params || {};

  useEffect(() => {
    if (setSwipeEnabled) {
      setSwipeEnabled(true);
    }
    return () => setSwipeEnabled && setSwipeEnabled(true);
  }, [setSwipeEnabled]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    setFilteredData(filterIconsByTags(text));
  };

  const handleIconPress = (item) => {
    if (setSwipeEnabled) {
      setSwipeEnabled(false);
    }
    navigation.navigate('ItemDetail', { item });
  };

  const renderIconItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleIconPress(item)}
      style={styles.iconContainer}
    >
      <Image source={item.image} style={styles.iconImage} />
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.gridContainer}>
        {/* 筛选栏移至左侧 */}
        <View style={styles.filterBar}>
          <Text>Search Filter</Text>
          
          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.tags(item => item.tags.includes('warrior')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/warrior.png')} style={styles.filterIcon} />
          </TouchableOpacity>


          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('Damage')))} style={styles.filterButton}>
            <Text>Damage</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('CriticalStrike')))} style={styles.filterButton}>
            <Text>CriticalStrike</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('AttackSpeed')))} style={styles.filterButton}>
            <Text>AttackSpeed</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('OnHit')))} style={styles.filterButton}>
            <Text>OnHit</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('ArmorPenetration')))} style={styles.filterButton}>
            <Text>ArmorPenetration</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('SpellDamage')))} style={styles.filterButton}>
            <Text>SpellDamage</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('Mana') || item.tags.includes('ManaRegen')))} style={styles.filterButton}>
            <Text>ManaRegen&Mana</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('MagicPenetration')))} style={styles.filterButton}>
            <Text>MagicPenetration</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('Health') || item.tags.includes('HealthRegen')))} style={styles.filterButton}>
            <Text>Health&HealthRegen</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('Armor')))} style={styles.filterButton}>
            <Text>Armor</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('SpellBlock')))} style={styles.filterButton}>
            <Text>SpellBlock</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('CooldownReduction') || item.tags.includes('AbilityHaste')))} style={styles.filterButton}>
            <Text>CooldownReduction&AbilityHaste</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('NonbootsMovement')))} style={styles.filterButton}>
            <Text>NonbootsMovement</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('LifeSteal') || item.tags.includes('SpellVamp')))} style={styles.filterButton}>
            <Text>LifeSteal&SpellVamp</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('Trinket')))} style={styles.filterButton}>
            <Text>Trinket</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('Consumable')))} style={styles.filterButton}>
            <Text>Consumable</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('Boots')))} style={styles.filterButton}>
            <Text>Boots</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA)} style={styles.filterButton}>
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
            renderItem={renderIconItem}
            key={numColumns}  // 强制刷新 FlatList 的 key，当列数变化时重新渲染
            keyExtractor={item => item.id}
            numColumns={numColumns}  // 动态列数
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      </View>
    </ScrollView>
  );
};

// 将 Stack Navigator 放入这个页面，处理页面之间的导航
const LOLItemScreen = ({ route }) => {
  const { setSwipeEnabled } = route?.params || {};
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ItemList"
        component={LOLItemList}
        options={{ headerShown: false }}
        initialParams={{ setSwipeEnabled }}
      />
      <Stack.Screen
        name="ItemDetail"
        component={LOLitemshow}
        options={{ title: 'Item Detail' }}
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
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: width * 0.01,  // 图标之间的间距
  },
  iconImage: {
    width: width * 0.15,  // 动态图片宽度（占屏幕宽度的15%）
    height: width * 0.15,  // 保持图片为正方形
    marginBottom: height * 0.01,  // 动态底部间距
  },
});

export default LOLItemScreen;
