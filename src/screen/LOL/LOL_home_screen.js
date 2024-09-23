import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, Dimensions, View, StyleSheet } from 'react-native';
import LOLHeroScreen from './LOL_heros';  // 调整路径
import LOLItemsScreen from './LOL_items';
import LOLCalcScreen from './LOL_calc';
import LOLRunesScreen from './LOL_runes';

const Tab = createMaterialTopTabNavigator();

const LOLHomeScreen = () => {
  const [swipeEnabled, setSwipeEnabled] = useState(true);  // 控制滑动开关

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          swipeEnabled: swipeEnabled,  // 根据状态控制是否允许滑动
          tabBarIcon: ({ focused }) => {
            let iconSource;
            if (route.name === 'Heroes') {
              iconSource = focused
                ? require('../../assets/images/lol/lol_hero_active.png')
                : require('../../assets/images/lol/lol_hero_common.png');
            } else if (route.name === 'Items') {
              iconSource = focused
                ? require('../../assets/images/lol/lol_item_active.png')
                : require('../../assets/images/lol/lol_item_common.png');
            } else if (route.name === 'Runes') {
              iconSource = focused
                ? require('../../assets/images/lol/lol_runes_active.png')
                : require('../../assets/images/lol/lol_runes_common.png');
            } else if (route.name === 'Calculator') {
              iconSource = focused
                ? require('../../assets/images/lol/lol_calc.png')
                : require('../../assets/images/lol/lol_calc.png');
            }

            return (
              <Image
                source={iconSource}
                style={{
                  width: Dimensions.get('window').width / 18,
                  height: Dimensions.get('window').width / 12,
                  transform: [{ scale: 1.5 }],
                }}
              />
            );
          },
          tabBarStyle: {
            height: Dimensions.get('window').height / 10,
            backgroundColor: 'white',
          },
          tabBarLabelStyle: {
            fontSize: Dimensions.get('window').height / 70,
            marginTop: Dimensions.get('window').height / 70,
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          showIcon: true,  // 确保图标显示
          labelPosition: 'below-icon',  // 确保文字在图标下方
        })}
      >
        <Tab.Screen
          name="Heroes"
          component={LOLHeroScreen}
          options={{ tabBarLabel: 'Heroes' }}
          initialParams={{ setSwipeEnabled }}  // 传递 setSwipeEnabled 函数
        />
        <Tab.Screen 
          name="Items" 
          component={LOLItemsScreen} 
          options={{ tabBarLabel: 'Items' }} 
          initialParams={{ setSwipeEnabled }} 
        />
        <Tab.Screen 
          name="Runes" 
          component={LOLRunesScreen} 
          options={{ tabBarLabel: 'Runes' }} 
          initialParams={{ setSwipeEnabled }} 
        />
        <Tab.Screen 
          name="Calculator" 
          component={LOLCalcScreen} 
          options={{ tabBarLabel: 'Calculator' }} 
          initialParams={{ setSwipeEnabled }} 
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LOLHomeScreen;
