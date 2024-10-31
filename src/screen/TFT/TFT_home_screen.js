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
        <Tab.Screen name="챔피언" component={TabScreen1} />
        <Tab.Screen name="증강체" component={TabScreen2} />
        <Tab.Screen name="아이템" component={TabScreen3} />
        <Tab.Screen name="배치톨" component={TabScreen4} />
      </Tab.Navigator>
    </View>
  );
}
