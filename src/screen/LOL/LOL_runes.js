import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LOLRunesShow from './LOL_show/LOL_runes_show'; // 引入符文展示页面

// 导入符文图标
const redIcon = require('../../assets/lol_runes/red_all.png');
const yellowIcon = require('../../assets/lol_runes/yellow_all.png');
const purpleIcon = require('../../assets/lol_runes/purple_all.png');
const greenIcon = require('../../assets/lol_runes/green_all.png');
const blueIcon = require('../../assets/lol_runes/blue_all.png');

const Tab = createMaterialTopTabNavigator();

const LOLRunes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconSource;
              if (route.name === 'red') {
                iconSource = redIcon;
              } else if (route.name === 'yellow') {
                iconSource = yellowIcon;
              } else if (route.name === 'purple') {
                iconSource = purpleIcon;
              } else if (route.name === 'green') {
                iconSource = greenIcon;
              } else if (route.name === 'blue') {
                iconSource = blueIcon;
              }

              return (
                <View style={styles.iconContainer}>
                <Image
                  source={iconSource}
                  style={{
                    transform: [{ scale: 1.3 }],
                  }}
                />
              </View>
              );
            },
            tabBarShowLabel: false,
            tabBarStyle: {
              height: Dimensions.get('window').height / 15,
              backgroundColor: 'white',
            },
          })}
        >
          {/* 使用 component prop 而不是 children */}
          <Tab.Screen name="red" component={(props) => <LOLRunesShow {...props} filter="Domination" />} />
          <Tab.Screen name="yellow" component={(props) => <LOLRunesShow {...props} filter="Precision" />} />
          <Tab.Screen name="purple" component={(props) => <LOLRunesShow {...props} filter="Sorcery" />} />
          <Tab.Screen name="green" component={(props) => <LOLRunesShow {...props} filter="Resolve" />} />
          <Tab.Screen name="blue" component={(props) => <LOLRunesShow {...props} filter="Inspiration" />} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    margin: "3%",
    padding: "2%",
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LOLRunes;
