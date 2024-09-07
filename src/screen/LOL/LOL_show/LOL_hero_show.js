import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { ICON_DATA } from '../../components/LOL/LOL_hero_icons'; // 假设你将英雄数据导入

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

      {/* 英雄描述 */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.heroDescription}>{item.description}</Text>
      </View>

      {/* 显示技能部分 */}
      <View style={styles.skillContainer}>
        {/* 技能 0 */}
        <View style={styles.skillRow}>
          <Image source={item.skill_0_icon} style={styles.skillIcon} />
          <Text style={styles.skillDescription}>
            {item.skill_0}: {item.skill_0_description}
          </Text>
        </View>

        {/* 技能 1 */}
        <View style={styles.skillRow}>
          <Image source={item.skill_1_icon} style={styles.skillIcon} />
          <Text style={styles.skillDescription}>
            {item.skill_1}: {item.skill_1_description}
          </Text>
        </View>

        {/* 技能 2 */}
        <View style={styles.skillRow}>
          <Image source={item.skill_2_icon} style={styles.skillIcon} />
          <Text style={styles.skillDescription}>
            {item.skill_2}: {item.skill_2_description}
          </Text>
        </View>

        {/* 技能 3 */}
        <View style={styles.skillRow}>
          <Image source={item.skill_3_icon} style={styles.skillIcon} />
          <Text style={styles.skillDescription}>
            {item.skill_3}: {item.skill_3_description}
          </Text>
        </View>

        {/* 技能 4 */}
        <View style={styles.skillRow}>
          <Image source={item.skill_4_icon} style={styles.skillIcon} />
          <Text style={styles.skillDescription}>
            {item.skill_4}: {item.skill_4_description}
          </Text>
        </View>

        {/* 技能 5 */}
        <View style={styles.skillRow}>
          <Image source={item.skill_5_icon} style={styles.skillIcon} />
          <Text style={styles.skillDescription}>
            {item.skill_5}: {item.skill_5_description}
          </Text>
        </View>
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
    marginBottom: 20,  // 图片与下方内容间的间距
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
