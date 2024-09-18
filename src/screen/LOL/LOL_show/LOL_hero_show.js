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
        <Text style={styles.heroDescription}>{'  '}{item.lore.replace(/。/g, '。\n\n  ')}</Text>
      </View>

      {/* 显示技能部分 */}
      <View style={styles.skillContainer}>
        {item.spells.map((spell, index) => (
          <View style={styles.skillRow} key={index}>
            <Image source={spell.image} style={styles.skillIcon} />
            <Text style={styles.skillDescription}>
              <Text style={styles.skillName}>{spell.name}</Text>: {spell.description}{"\n"}
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
    padding: width * 0.03, // 使用屏幕宽度的3%作为内边距
    alignItems: 'center',  // 让内容居中
  },
  heroImage: {
    width: width * 0.6,  // 图片宽度为屏幕宽度的60%
    height: width * 0.6,  // 图片高度同宽
    borderRadius: width * 0.3,  // 圆形图片
    marginBottom: height * 0.02,  // 图片与下方内容间的间距，屏幕高度的2%
  },
  heroName: {
    fontSize: width * 0.06, // 使用屏幕宽度的6%作为字体大小
    fontWeight: 'bold',
    marginBottom: height * 0.02,  // 与下方内容间距，屏幕高度的2%
  },
  descriptionContainer: {
    marginBottom: height * 0.02,  // 与技能部分的间距，屏幕高度的2%
    alignSelf: 'flex-start', // 左对齐
    paddingHorizontal: width * 0.03, // 使用屏幕宽度的3%作为内边距
  },
  heroDescription: {
    fontSize: width * 0.04, // 使用屏幕宽度的4%作为字体大小
    textAlign: 'left', // 左对齐
  },
  skillContainer: {
    width: '100%',
  },
  skillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.015, // 使用屏幕高度的1.5%作为上下外边距
  },
  skillIcon: {
    width: width * 0.12, // 使用屏幕宽度的12%作为技能图标大小
    height: width * 0.12, // 同宽高
    borderRadius: (width * 0.12) / 2,  // 圆形技能图标
    marginRight: width * 0.03,  // 图标与文字之间的间距，屏幕宽度的3%
  },
  skillDescription: {
    fontSize: width * 0.04, // 使用屏幕宽度的4%作为字体大小
    flex: 1,  // 让描述文本占据剩余空间
    textAlign: 'left', // 左对齐
  },
  skillName: {
    fontWeight: 'bold', // 技能名字加粗
  },
});

export default LOLHeroShow;
