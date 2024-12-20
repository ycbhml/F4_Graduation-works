import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { HERO_DATA } from '../../../components/LOL/LOL_hero_icons';
import { ITEMS_DATA } from '../../../components/LOL/LOL_items';  // 引入物品数据

const DEFAULT_ITEM_IMAGE = require('../../../assets/images/lol/hero_select.png');

const LOLCalcShow = ({ route, navigation }) => {
  const { item, setSwipeEnabled, callback } = route.params || {};
  const [selectedHero, setSelectedHero] = useState(null);
  const [selectedItems, setSelectedItems] = useState(Array(6).fill(null));
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
      const selectedItem = ITEMS_DATA.find(item => item.id === selectedItemId);
      const updateItems = [...selectedItems];

      updateItems[selectedSlot] = selectedItem;
      setSelectedItems(updateItems);
    }
  }, [route.params?.selectedItemId, route.params?.selectedSlot]);

  const handleItemSelect = (slotIndex) => {
    navigation.navigate('ItemSelection', { selectedSlot: slotIndex });
  };

  // 动态计算英雄属性
  const getHeroAttributes = () => {
    if (!selectedHero) return [];
    const { stats } = selectedHero;

    // 基础属性（只考虑英雄本身的属性）
    let baseAttributes = {
      hp: stats.hp + (stats.hpperlevel * (level - 1) || 0),
      mp: stats.mp + (stats.mpperlevel * (level - 1) || 0),

      //攻击力 法强 护甲 法抗
      attackdamage: stats.attackdamage + (stats.attackdamageperlevel * (level - 1) || 0),
      spelldamage: (stats.spelldamageperlevel * (level -1) || 0),
      armor: stats.armor + (stats.armorperlevel * (level - 1) || 0),
      spellblock: stats.spellblock + (stats.spellblockperlevel * (level - 1) || 0),

      //攻速 cd 暴击 移速
      attackspeed: (stats.attackspeed * (1 + stats.attackspeedperlevel / 100) ** (level - 1)),
      cd: (stats.cd || 0),
      crit: stats.crit + (stats.critperlevel || 0) * (level - 1),
      movespeed: stats.movespeed,

      //生命回复, 施法资源回复, 治疗强度, 护盾强度, 穿甲, 护甲穿透, 法术穿透
      hpregen: stats.hpregen + (stats.hpregenperlevel || 0) * (level - 1),
      mpregen: stats.mpregen + (stats.mpregenperlevel || 0) * (level - 1),
      heallevel: (stats.heallevel * (level - 1) || 0),
      shildlevel: (stats.shildlevel * (level - 1) || 0),
      amrorpenetrate: (stats.amrorpenetrate * (level - 1) || 0),
      amrorpenetratePercten: (stats.amrorpenetratePercten * (level - 1) || 0),
      spellblockpenetrate: (stats.spellblockpenetrate * (level - 1) || 0),

      //生命偷取， 全能吸血， 射程， 韧性
      lifesteal: (stats.lifesteal * (level - 1) || 0),
      bloodsucking: (stats.bloodsucking * (level - 1) || 0),
      attackrange: stats.attackrange,
      toughness: (stats.toughness * (level - 1) || 0),
      // 添加其他属性
    };

     // 累加物品属性
     selectedItems.forEach(item => {
      if (item && item.statValues && item.statNames_eng) {
          item.statNames_eng.forEach((statName, index) => {
              let statValue = parseFloat(item.statValues[index].replace('%', '')) || 0;
              baseAttributes[statName] = (baseAttributes[statName] || 0) + statValue;
          });
      }
  });

    const formatValue = (value, decimalPlaces = 0) => {
      if (decimalPlaces > 0) {
        return Number(value.toFixed(decimalPlaces)); // 保留指定小数位  
      }
      return Math.round(value); // 取整
    };

    return [
      { name: '체력', value: formatValue(baseAttributes.hp), image: require('../../../assets/images/lol/prop/hp.png') },
{ name: '마나', value: formatValue(baseAttributes.mp), image: require('../../../assets/images/lol/prop/mana.png') },

{ name: '공격력', value: formatValue(baseAttributes.attackdamage), image: require('../../../assets/images/lol/prop/damage.png') },
{ name: '주문력', value: formatValue(baseAttributes.spelldamage), image: require('../../../assets/images/lol/prop/spelldamage.png') },
{ name: '방어력', value: formatValue(baseAttributes.armor), image: require('../../../assets/images/lol/prop/armor.png') },
{ name: '마법 저항력', value: formatValue(baseAttributes.spellblock), image: require('../../../assets/images/lol/prop/spellblock.png') },

{ name: '공격 속도', value: formatValue(baseAttributes.attackspeed, 3), image: require('../../../assets/images/lol/prop/attackspeed.png') },
{ name: '재사용 대기시간 감소', value: formatValue(baseAttributes.cd), image: require('../../../assets/images/lol/prop/cd.png') },
{ name: '치명타 확률', value: formatValue(baseAttributes.crit), image: require('../../../assets/images/lol/prop/crit.png') },
{ name: '이동 속도', value: formatValue(baseAttributes.movespeed), image: require('../../../assets/images/lol/prop/movespeed.png') },

{ name: '체력 재생', value: formatValue(baseAttributes.hpregen), image: require('../../../assets/images/lol/prop/hpregen.png') },
{ name: '마나 재생', value: formatValue(baseAttributes.mpregen), image: require('../../../assets/images/lol/prop/mpregen.png') },
{ name: '치유 및 보호막 효과', value: formatValue(baseAttributes.healshildlevel), image: require('../../../assets/images/lol/prop/healshildlevel.png') },
{ name: '방어구 관통력', value: formatValue(baseAttributes.amrorpenetrate), image: require('../../../assets/images/lol/prop/amrorpenetrate.png') },
{ name: '방어구 관통력(%)', value: formatValue(baseAttributes.amrorpenetratePercten), image: require('../../../assets/images/lol/prop/amrorpenetratePercten.png') },
{ name: '마법 관통력', value: formatValue(baseAttributes.spellblockpenetrate), image: require('../../../assets/images/lol/prop/spellblockpenetrate.png') },

{ name: '생명력 흡수', value: formatValue(baseAttributes.lifesteal), image: require('../../../assets/images/lol/prop/lifesteal.png') },
{ name: '만능 흡혈', value: formatValue(baseAttributes.bloodsucking), image: require('../../../assets/images/lol/prop/bloodsucking.png') },
{ name: '사거리', value: formatValue(baseAttributes.attackrange), image: require('../../../assets/images/lol/prop/attackrange.png') },
{ name: '강인함', value: formatValue(baseAttributes.toughness), image: require('../../../assets/images/lol/prop/toughness.png') },

    ];
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
        <Text>Level :{level}</Text>

        {/* 英雄属性框 */}
        <View style={styles.twoAttributesRow}>
            {getHeroAttributes().slice(0, 2).map((attr, index) => (
              <View key={index} style={styles.attributeRow}>
                <Image source={attr.image} style={styles.attributeIcon} />
                <Text style={styles.attributeText}>{`${attr.name}: ${attr.value}`}</Text>
              </View>
            ))}
          </View>
          <View style={styles.heroAttributes}>
          {getHeroAttributes().slice(2).map((attr, index) => (
            <View key={index} style={styles.attributeRow}>
              <Image source={attr.image} style={styles.attributeIcon} />
              <Text style={styles.attributeText}>{`${attr.name}: ${attr.value}`}</Text>
            </View>
          ))}
        </View>

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
  heroAttributes: {
    width: '90%',
    backgroundColor: '#f2f2f2',
    padding: '0.5%',
    borderRadius: 10,
    marginBottom: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  twoAttributesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  attributeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '22%', // 调整为更小的宽度，适应每排4个
    marginBottom: 10,
    justifyContent: 'flex-start',
  },
  attributeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  attributeText: {
    fontSize: 10,
  },
  itemGrid: {
    flexDirection: 'row',
    justifyContent: 'center', // 调整为均匀分布
    flexWrap: 'nowrap', // 防止换行
    width: '100%',
    paddingHorizontal: '2%', // 减小左右内边距
    marginTop: '5%',
  },
  itemImage: {
    width: 45, // 进一步减小图标的大小
    height: 45, // 确保宽高一致
    margin: 5, // 保持间距
    borderRadius: 10,
  },
});

export default LOLCalcShow;
