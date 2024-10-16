// src/screen/Event/EventDetailScreen.js

import React, { useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EventDetailScreen = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    // 隐藏 Top Tab Navigator，并保留 Header
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' },   // 隐藏底部 Bottom Tab Navigator
      swipeEnabled: false,                // 禁用顶部 Tab Navigator 的滑动
    });

    // 确保显示 Stack Navigator 提供的默认 Header
    navigation.setOptions({
      headerShown: true,                  // 保留顶部的 Header
    });

    return () => {
      // 返回时恢复 Top Tab Navigator 滑动和底部 Bottom Tab Navigator
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: 'flex' },  // 恢复底部 Bottom Tab Navigator
        swipeEnabled: true,                // 恢复顶部 Tab Navigator 的滑动
      });
    };
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={item.image} style={styles.eventImage} />
        <Text style={styles.eventTitle}>Title: {item.title}</Text>
        <Text style={styles.eventDescription}>{item.description}</Text>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.05,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.05,
  },
  eventImage: {
    width: width * 0.6,
    height: width * 0.4,
    marginBottom: 20,
  },
  eventTitle: {
    fontSize: height * 0.03,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: height * 0.02,
    textAlign: 'center',
    marginHorizontal: width * 0.05,
  },
});

export default EventDetailScreen;
