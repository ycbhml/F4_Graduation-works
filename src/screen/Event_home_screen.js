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
                ? require('../assets/images/event_home.png')
                : require('../assets/images/event_home.png');
            } else if (route.name === 'e_notice') {
              iconName = focused
                ? require('../assets/images/notice.png')
                : require('../assets/images/notice.png');
            } else if (route.name === 'e_esport') {
              iconName = focused
                ? require('../assets/images/esports.png')
                : require('../assets/images/esports.png');
            }

            return (
              <Image
                source={iconName}
                style={{
                  width: Dimensions.get('window').width / 8,
                  height: Dimensions.get('window').height / 30,
                  transform: [{ scale: 1.1 }]
                }}
              />
            );
          },
          tabBarStyle: {
            height: Dimensions.get('window').height / 12,
            backgroundColor: 'white', // 可根据需要更改背景色
          },
          tabBarLabelStyle: { fontSize: 12 },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          showIcon: true, // 确保图标显示
        })}
      >
        <Tab.Screen name="e_event" component={Event_event_screen} options={{ tabBarLabel:'event'}}/>
        <Tab.Screen name="e_notice" component={Event_notice_screen} options={{ tabBarLabel:'notice'}}/>
        <Tab.Screen name="e_esport" component={Event_esport_screen} options={{ tabBarLabel:'esports'}}/>
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
