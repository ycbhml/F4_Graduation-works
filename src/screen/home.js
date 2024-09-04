import * as React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Event_home_screen from './Event_home_screen';
import LOL_home_screen from './LOL_home_screen';
import TFT_home_screen from './TFT_home_screen';
import MY_home_screen from './MY_home_screen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {

  return (
    <View style={styles.container}>

      {/* 底部Tab导航器 */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Event') {
              iconName = focused
                ? require('../assets/images/event.png')
                : require('../assets/images/event.png');
            } else if (route.name === 'LOL') {
              iconName = focused
                ? require('../assets/images/lol.png')
                : require('../assets/images/lol.png');
            } else if (route.name === 'TFT') {
              iconName = focused
                ? require('../assets/images/tft.png')
                : require('../assets/images/tft.png');
            } else if (route.name === 'MY') {
              iconName = focused
                ? require('../assets/images/my.png')
                : require('../assets/images/my.png');
            }

            return <Image 
              source={iconName} 
              style={{ 
                width: Dimensions.get('window').width / 9, 
                height: Dimensions.get('window').height / 25,
                transform: [{scale: 1.1 }]
              }} />;
          },
          tabBarStyle: { height: Dimensions.get('window').height / 10 },
          tabBarLabelStyle: { fontSize: 20 },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        {/* 确保这里的 HomeTab 指向一个实际的内容屏幕，而不是 HomeScreen 本身 */}
        <Tab.Screen name="Event" component={Event_home_screen}  />
        <Tab.Screen name="LOL" component={LOL_home_screen}  />
        <Tab.Screen name="TFT" component={TFT_home_screen}  />
        <Tab.Screen name="MY" component={MY_home_screen}  />
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
