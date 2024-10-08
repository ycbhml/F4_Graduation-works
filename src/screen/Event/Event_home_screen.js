// src/screen/Event/HomeScreen.js

import * as React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Event_event_screen from './Event_event_screen';
import Event_notice_screen from './Event_notice_screen';
import Event_esport_screen from './Event_esport_screen';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* 顶部Tab导航器 */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'e_event') {
              iconName = focused
                ? require('../../assets/images/Event/event_active.png')
                : require('../../assets/images/Event/event_common.png');
            } else if (route.name === 'e_notice') {
              iconName = focused
                ? require('../../assets/images/Event/notice_active.png')
                : require('../../assets/images/Event/notice_common.png');
            } else if (route.name === 'e_esport') {
              iconName = focused
                ? require('../../assets/images/Event/esports_active.png')
                : require('../../assets/images/Event/esports_common.png');
            }

            return (
              <Image
                source={iconName}
                style={{
                  width: Dimensions.get('window').width / 18,
                  height: Dimensions.get('window').width / 12,  // 保持图标为正方形
                  transform: [{scale: 1.5}]
                }}
              />
            );
          },
          tabBarStyle: {
            height: Dimensions.get('window').height / 10,  // 控制 Tab 高度
            backgroundColor: 'white',
          },
          tabBarLabelStyle: {
            fontSize: Dimensions.get('window').height / 50,  // 动态控制文字大小
            marginTop: Dimensions.get('window').height/ 70,  // 去掉顶部的默认间距
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          showIcon: true,  // 确保图标显示
          labelPosition: 'below-icon',  // 确保文字在图标下方
        })}
      >
        <Tab.Screen name="e_event" component={Event_event_screen} options={{ tabBarLabel: 'EVENT' }} />
        <Tab.Screen name="e_notice" component={Event_notice_screen} options={{ tabBarLabel: 'NOTICE' }} />
        <Tab.Screen name="e_esport" component={Event_esport_screen} options={{ tabBarLabel: 'E-SPORTS' }} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
