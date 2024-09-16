import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { HERO_DATA } from '../../../components/LOL/LOL_hero_icons';
import { ICON_DATA as ITEM_DATA } from '../../../components/LOL/LOL_items';  // 引入物品数据
import LOLItemSelection from '../LOL_item_selection'; // 导入物品选择页面

const DEFAULT_ITEM_IMAGE = require('../../../assets/images/lol/hero_select.png');

const LOLCalcShow = ({ route, navigation }) => {

  const { item, setSwipeEnabled, callback } = route.params || {};
  const [selectedHero, setSelectedHero] = useState(null);
  const [selectedItems, setSelectedItems] = useState(Array(7).fill(null));
  const [level, setLevel] = useState(1);

  useEffect(() => {
    if (item) {
      const hero = HERO_DATA.find(heroItem => heroItem.id === item.id);
      setSelectedHero(hero);
    }
  }, [item]);

  useEffect(() => {
    const selectedItemId = route.params?.selectedItemId;
    const selectedSlot = route.params?.selectedSlot;

    if (selectedItemId && selectedSlot !== undefined) {
      const selectedItem = ITEM_DATA.find(item => item.id === selectedItemId);
      const updateItems = [...selectedItems];

      updateItems[selectedSlot] = selectedItem;
      setSelectedItems(updateItems);
    }
  }, [route.params?.selectedItemId, route.params?.selectedSlot]);

  const handleItemSelect = (slotIndex) => {
    navigation.navigate('ItemSelection', { selectedSlot: slotIndex });
  };

  // 反向传值并返回
  const goBackToSelection = () => {
    if (callback) {
      callback({ selectedHero, level });
    }
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* 英雄头像 */}
        <Image source={selectedHero?.image} style={styles.heroImage} />
        <Text style={styles.heroName}>{selectedHero?.description}</Text>

        {/* 等级进度条 */}
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={18}
          step={1}
          value={level}
          onValueChange={setLevel}
        />
        <Text>当前等级：{level}</Text>

        {/* 物品格子 */}
        <View style={styles.itemGrid}>
          {selectedItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleItemSelect(index)}>
              <Image
                source={item ? item.image : DEFAULT_ITEM_IMAGE}
                style={styles.itemImage}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* 返回并传递数据 */}
        <TouchableOpacity onPress={goBackToSelection}>
          <Text>返回并传递数据</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: '30%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
    marginBottom: '5%',
  },
  heroName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  slider: {
    width: '80%',
    height: '5%',
    marginBottom: '5%',
  },
  itemGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  itemImage: {
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 10,
  },
});

export default LOLCalcShow;