// src/screen/LOL_show/LOL_hero_show.js

import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LOLHeroShow = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    // 隐藏上下两个 Tab Navigator
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' },   // 隐藏 Bottom Tab Navigator
    });

    // 显示默认 Header
    navigation.setOptions({
      headerShown: true,                  // 显示 Stack Navigator 自带的 Header
    });

    return () => {
      // 离开页面时恢复 Bottom Tab Navigator
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: 'flex' },   // 恢复 Bottom Tab Navigator
      });
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.heroImage} />
      <Text style={styles.heroName}>Name: {item.name}</Text>
      <Text style={styles.heroDescription}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Dimensions.get('window').width * 0.05,
  },
  heroImage: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    marginBottom: 20,
  },
  heroName: {
    fontSize: Dimensions.get('window').height * 0.03,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  heroDescription: {
    fontSize: Dimensions.get('window').height * 0.02,
    textAlign: 'center',
    marginHorizontal: Dimensions.get('window').width * 0.05,
  },
});

export default LOLHeroShow;
