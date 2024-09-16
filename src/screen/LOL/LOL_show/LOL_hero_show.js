import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { heroInfo } from '../../components/LOL/LOL_hero_icons'; // 假设你将英雄数据导入

const LOLHeroShow = ({ route, navigation }) => {
  const { item } = route.params; // 从传递的参数中获取选中的英雄数据

  useEffect(() => {
    // 隐藏底部导航栏
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

    return () => {
      // 恢复默认的底部导航栏样式
      navigation.getParent()?.setOptions({ tabBarStyle: undefined });
    };
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 显示英雄图片 */}
      <Image source={item.image} style={styles.heroImage} />
      
      {/* 英雄名称 */}
      <Text style={styles.heroName}>{item.name}</Text>

      {/* 英雄描述 */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.heroDescription}>{item.lore}</Text>
      </View>

      {/* 显示技能部分 */}
      <View style={styles.skillContainer}>
        {item.spells.map((spell, index) => (
          <View style={styles.skillRow} key={index}>
            <Image source={spell.image} style={styles.skillIcon} />
            <Text style={styles.skillDescription}>
              {spell.name}: {spell.description}{"\n"}
              CD: {spell.cooldownBurn}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

// 获取屏幕的宽高
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',  // 让内容居中
  },
  heroImage: {
    width: width * 0.6,  // 图片宽度为屏幕宽度的60%
    height: width * 0.6,  // 图片高度同宽
    borderRadius: width * 0.3,  // 圆形图片
    marginBottom: 10,  // 图片与下方内容间的间距
  },
  heroName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  heroDescription: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  skillContainer: {
    width: '100%',
  },
  skillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  skillIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,  // 圆形技能图标
    marginRight: 10,  // 图标与文字之间的间距
  },
  skillDescription: {
    fontSize: 14,
    flex: 1,  // 让描述文本占据剩余空间
  },
});

export default LOLHeroShow;
