// src/screen/LOL/LOL_home_screen.js

import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LOLHeroScreen from './LOL_heros';
import LOLItemsScreen from './LOL_items';  // 假设其他页面
import LOLCalcScreen from './LOL_calc';    // 假设其他页面

const Tab = createMaterialTopTabNavigator();

const LOLHomeScreen = () => {
  const [swipeEnabled, setSwipeEnabled] = useState(true);  // 控制滑动开关

  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: swipeEnabled,  // 根据状态控制是否允许滑动
      }}
    >
      <Tab.Screen
        name="Heroes"
        component={LOLHeroScreen}
        options={{ title: 'Heroes' }}
        initialParams={{ setSwipeEnabled }}  // 传递 setSwipeEnabled 函数
      />
      <Tab.Screen name="Items" component={LOLItemsScreen} />
      <Tab.Screen name="Calculator" component={LOLCalcScreen} />
    </Tab.Navigator>
  );
};

export default LOLHomeScreen;
