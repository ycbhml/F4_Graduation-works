import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Slider, TouchableOpacity, FlatList } from 'react-native';

const LOLCalcShow = ({ route, navigation }) => {
  const { selectedHero, setSwipeEnabled } = route.params;
  
  // 用于保存等级和选中的物品状态
  const [level, setLevel] = useState(1);
  const [selectedItems, setSelectedItems] = useState(Array(7).fill(null)); // 7个格子，初始为空

  useEffect(() => {
    if (setSwipeEnabled) {
      setSwipeEnabled(false);
    }
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

    return () => {
      if (setSwipeEnabled) {
        setSwipeEnabled(true);
      }
      navigation.getParent()?.setOptions({ tabBarStyle: undefined });
    };
  }, [navigation, setSwipeEnabled]);

  // 用于模拟筛选弹出框，选择物品并填充到格子
  const handleItemSelect = (index) => {
    // 模拟选择逻辑，可以替换为真实的选择逻辑
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = `Item ${index + 1}`; // 选中项示例，可以替换为实际数据
    setSelectedItems(newSelectedItems);
  };

  // 渲染格子
  const renderGridItem = (item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.gridItem}
      onPress={() => handleItemSelect(index)}
    >
      <Text>{item ? item : 'Empty'}</Text>  {/* 如果已选择，则显示物品，否则显示 Empty */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* 英雄头像和名字 */}
      <Image source={selectedHero.image} style={styles.heroImage} />
      <Text style={styles.heroName}>{selectedHero.name}</Text>

      {/* 等级进度条 */}
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={18}
        step={1}
        value={level}
        onValueChange={setLevel}  // 更新等级
      />
      <Text>当前等级：{level}</Text>  {/* 显示当前等级 */}

      {/* 根据等级变化的文本介绍 */}
      <Text>英雄描述：当前等级为 {level}</Text>  {/* 可根据实际数据动态变化 */}

      {/* 底部的7个格子 */}
      <View style={styles.gridContainer}>
        {selectedItems.map(renderGridItem)}  {/* 渲染7个格子 */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  heroName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  slider: {
    width: '80%',
    height: 40,
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 30,
  },
  gridItem: {
    width: '28%', // 7个格子，每行可以放3个
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default LOLCalcShow;
