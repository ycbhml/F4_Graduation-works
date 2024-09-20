import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { ITEMS_DATA, filterIconsByTags, filterIconsByName } from '../../components/LOL/LOL_items';

const LOLItemSelection = ({ navigation, route }) => {
  const { selectedSlot } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(ITEMS_DATA);
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

  const renderIconItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleItemSelect(item)}
      style={styles.iconContainer}
    >
      <Image source={item.image} style={styles.iconImage} />
      {/* 添加物品名称 */}
      <Text style={styles.itemName}>{item.name_kr}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.gridContainer}>
        {/* 左侧筛选栏 */}
        <View style={styles.filterBar}>
          
        <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('Damage')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/Damage.png')} style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('CriticalStrike')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/CriticalStrike.png')} style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('AttackSpeed')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/AttackSpeed.png')} style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('OnHit')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/OnHit.png')} style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('ArmorPenetration')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/ArmorPenetration.png')} style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('SpellDamage')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/SpellDamage.png')} style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('Mana') || item.tags.includes('ManaRegen')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/ManaRegen&Mana.png')} style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('MagicPenetration')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/MagicPenetration.png')} style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('Health') || item.tags.includes('HealthRegen')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/Health&HealthRegen.png')} style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('Armor')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/Armor.png')} style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('SpellBlock')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/SpellBlock.png')} style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('CooldownReduction') || item.tags.includes('AbilityHaste')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/CooldownReduction&AbilityHaste.png')} style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('NonbootsMovement')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/NonbootsMovement.png')} style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('LifeSteal') || item.tags.includes('SpellVamp')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/LifeSteal&SpellVamp.png')} style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('Trinket')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/Trinket.png')} style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('Consumable')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/Consumable.png')} style={styles.filterIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFilteredData(ITEMS_DATA.filter(item => item.tags.includes('Boots')))} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/Boots.png')} style={styles.filterIcon} />
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
            numColumns={numColumns}  // 每行四列
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
    width: width * 0.18,
    backgroundColor: '#f0f0f0',
    padding: height * 0.01,
    alignItems: 'flex-start',
  },
  filterButton: {
    padding: height * 0.01,
    backgroundColor: '#ddd',
    borderRadius: width * 0.06,
    marginVertical: height * 0.003,
    width: '100%',
    alignItems: 'center',
  },
  filterIcon: {
    width: width * 0.05,  // 图片宽度动态调整
    height: width * 0.05, // 图片高度保持为正方形
    alignItems: 'center',
    transform: [{scale: 1.6}],
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
    paddingBottom: height * 0.01,
  },
  iconContainer: {
    width: width * 0.17,  // 每个图标项的宽度（确保一排四个）
    justifyContent: 'center',
    alignItems: 'center',
    margin: width * 0.01,  // 图标之间的间距
  },
  iconImage: {
    width: width * 0.15,  // 动态图片宽度
    height: width * 0.15,  // 保持图片为正方形
    marginBottom: height * 0.001,  // 底部间距
    borderRadius: width * 0.6,
  },
  itemName: {
    textAlign: 'center',  // 名字居中显示在图片下方
    fontSize: 0,
    marginTop: height * 0.0002,
    marginBottom: height * 0.004,
  },
});

export default LOLItemSelection;
