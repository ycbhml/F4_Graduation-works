import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Dimensions, ImageBackground, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HeroSelectionScreen from './LOL_hero_selection'; // 导入英雄选择界面

const Stack = createStackNavigator();

// 主界面，用于显示选择英雄的按钮
const LOLCalcMainScreen = ({ navigation, route }) => {
  const { setSwipeEnabled } = route.params || {};  // 从 route 中获取 setSwipeEnabled

  const handleSelectHero = () => {
    // 当进入英雄选择界面时禁用滑动
    if (setSwipeEnabled) {
      setSwipeEnabled(false); // 禁用滑动
    }
    navigation.navigate('HeroSelection', { setSwipeEnabled });  // 传递 setSwipeEnabled
  };

  return (
    <ImageBackground
      source={require('../../assets/images/lol/background.jpg')} // 背景图片路径
      style={styles.background}
      imageStyle={styles.backgroundImage} // 背景图片样式，控制透明度
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={handleSelectHero} style={styles.button}>
          <Image source={require('../../assets/images/lol/hero_select.png')} style={styles.icon} />
          <Text style={styles.label}>Select a Hero</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

// Stack Navigator，主要包含主界面和英雄选择界面的路由
const LOLCalc = ({ route }) => {
  const { setSwipeEnabled } = route.params || {};  // 获取从父级传递的 setSwipeEnabled

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={LOLCalcMainScreen}
        options={{ headerShown: false }} // 隐藏头部导航
        initialParams={{ setSwipeEnabled }}  // 将 setSwipeEnabled 传递到 Main Screen
      />
      <Stack.Screen
        name="HeroSelection"
        component={HeroSelectionScreen}
        options={{ headerShown: false }} // 隐藏头部导航
      />
    </Stack.Navigator>
  );
};

// 获取设备宽高
const { width, height } = Dimensions.get('window');

// 样式
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    opacity: 0.5, // 设置背景图片的透明度
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: width * 0.6, // 按钮大小为宽度的60%
    height: width * 0.6, // 高度和宽度一致，形成正方形按钮
    borderRadius: width * 0.3, // 半圆角
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '60%', // 图片大小设置为按钮的60%
    height: '60%',
    borderRadius: width * 0.15, // 添加圆角到图片
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default LOLCalc;
