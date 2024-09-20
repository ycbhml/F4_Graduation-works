import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { heroInfo } from '../../components/LOL/LOL_hero_icons'; // 假设你将英雄数据导入

const LOLHeroShow = ({ route, navigation }) => {
  const { item } = route.params; // 从传递的参数中获取选中的英雄数据
  const [selectedSkill, setSelectedSkill] = useState(item.spells[0]); // 默认选择第一个技能

  useEffect(() => {
    // 隐藏底部导航栏
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

    return () => {
      // 恢复默认的底部导航栏样式
      navigation.getParent()?.setOptions({ tabBarStyle: undefined });
    };
  }, [navigation]);

  const handleSkillPress = (spell) => {
    setSelectedSkill(spell); // 设置当前按下的技能
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 背景图片和英雄名称 */}
      <View style={styles.heroBackgroundContainer}>
        <Image source={item.background_image} style={styles.heroBackground} />
        <Text style={styles.heroNameOnBackground}>{item.name}</Text>
      </View>

      <View style={styles.descriptionView}>
        <Text style={styles.descriptionText}>  {item.lore}</Text>
      </View>

      {/* 横向技能选择 */}
      <View style={styles.skillRow}>
        {/* 渲染包括被动技能在内的所有技能 */}
        {[item.passive, ...item.spells].map((spell, index) => (
          <TouchableOpacity key={index} onPress={() => handleSkillPress(spell)} style={styles.skillButton}>
            <Image
              source={spell.image}
              style={[
                styles.skillIcon,
                selectedSkill.name === spell.name && styles.selectedSkillIcon, // 按下时放大图标
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* 技能描述 */}
      <View style={styles.skillDescriptionContainer}>
        <Text style={styles.skillName}>{selectedSkill.name}</Text>
        <Text style={styles.skillDescription}>
          {selectedSkill.description}{"\n"}
          CD: {selectedSkill.cooldownBurn}
        </Text>
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
  heroBackgroundContainer: {
    width: '100%',
    height: height * 0.3, // 根据屏幕高度占据大约30%的高度
    position: 'relative',
    marginBottom: 0, // 消除图片与下方内容间的间距
  },
  heroBackground: {
    width: '110%',
    height: '100%', // 确保背景图覆盖整个容器
    resizeMode: 'cover', // 背景图像覆盖整个容器
    transform: [{ translateX: -width * 0.05 }],
  },
  heroNameOnBackground: {
    position: 'absolute',
    bottom: height * 0.02, // 名字距离背景图片底部 2% 的屏幕高度
    left: width * 0.05,   // 名字距离背景图片左边 5% 的屏幕宽度
    fontSize: width * 0.08, // 使用屏幕宽度的8%作为字体大小
    fontWeight: 'bold',
    color: '#fff', // 白色文字
    textShadowColor: 'rgba(0, 0, 0, 0.7)', // 添加黑色阴影
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  skillRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', // 平均分布技能图标
    width: '100%',
    paddingHorizontal: width * 0.01, // 水平内边距
    marginBottom: height * 0.02, // 技能行与下方描述间距
  },
  skillIcon: {
    width: width * 0.13, // 使用屏幕宽度的15%作为技能图标大小
    height: width * 0.13, // 同宽高
    borderRadius: (width * 0.15) / 2,  // 圆形技能图标
  },
  selectedSkillIcon: {
    transform: [{ scale: 1.2 }], // 被选中的图标放大1.2倍
  },
  skillDescriptionContainer: {
    width: '100%',
    paddingHorizontal: width * 0.05, // 技能描述左右内边距
  },
  skillName: {
    fontSize: width * 0.06, // 使用屏幕宽度的6%作为技能名字大小
    fontWeight: 'bold',
    marginBottom: height * 0.01,
  },
  skillDescription: {
    fontSize: width * 0.045, // 使用屏幕宽度的4.5%作为技能描述字体大小
    textAlign: 'left',
  },
  descriptionView: {
    marginBottom: height * 0.03,
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.03,
  },
  descriptionText: {
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'left',
  },
});

export default LOLHeroShow;
