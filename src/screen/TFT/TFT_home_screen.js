import React from 'react';
import { View, Text, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabScreen1 from "./TFT_page_1";
import TabScreen2 from "./TFT_page_2";
import TabScreen3 from "./TFT_page_3";
import TabScreen4 from "./TFT_page_4";

const Tab = createMaterialTopTabNavigator();


// 页面1 的 home 页面，顶部有 Tab Navigator
export default function NewPage() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen name="棋子" component={TabScreen1} />
        <Tab.Screen name="海克斯" component={TabScreen2} />
        <Tab.Screen name="装备" component={TabScreen3} />
        <Tab.Screen name="模拟器" component={TabScreen4} />
      </Tab.Navigator>
    </View>
  );
}
