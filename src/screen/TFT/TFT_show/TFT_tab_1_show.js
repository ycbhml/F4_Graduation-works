import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

// 获取屏幕的宽度和高度
const { width, height } = Dimensions.get('window');

const tab1_show = ({ route }) => {
  const { champion } = route.params;  // 获取传递过来的 champion 数据

  // 拼接图标 URL
  const BASE_URL = 'https://raw.communitydragon.org/14.21/game/';
  const iconPath = champion.icon?.toLowerCase().replace(/\.tft_set12\.tex$/, '_mobile.tft_set12.png');
  const imageUrl = `${BASE_URL}${iconPath}`;

  return (
    <View style={styles.container}>
      {/* 图片居中并占据 50% 的屏幕高度 */}
      <Image source={{ uri: imageUrl }} style={styles.image} />

      {/* 显示英雄的其他信息 */}
      <Text style={styles.title}>{champion.name}</Text>
      <Text style={styles.details}>Cost: {champion.cost}</Text>
      <Text style={styles.details}>Traits: {champion.traits.join(', ')}</Text>
      <Text style={styles.details}>HP: {champion.stats.hp}</Text>
      <Text style={styles.details}>Armor: {champion.stats.armor}</Text>
      {/* 你可以在这里添加其他详细信息 */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // 垂直居中
    alignItems: 'center',  // 水平居中
    padding: 20,
    backgroundColor: '#f0f0f0',  // 可选：背景颜色，帮助观察布局
  },
  image: {
    width: width * 1,  // 图片宽度为屏幕宽度的 80%
    height: height * 0.5,  // 图片高度占据屏幕的 50%
    resizeMode: 'contain',  // 保持图片比例
    marginBottom: 20,  // 图片与文字之间的间距
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default tab1_show;
