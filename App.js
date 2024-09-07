// App.js

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/home';
import LoginScreen from './src/screen/login';
import LOL_home_screen from './src/screen/LOL/LOL_home_screen';
import TFT_home_screen from './src/screen/TFT/TFT_home_screen';
import MY_home_screen from './src/screen/MY/MY_home_screen';
import Event_home_screen from './src/screen/Event/Event_home_screen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">

        <Stack.Screen  name="login" component={LoginScreen} />
        <Stack.Screen  name="Home" component={HomeScreen} />
        <Stack.Screen  name="LOL" component={LOL_home_screen} />
        <Stack.Screen  name="TFT" component={TFT_home_screen} />
        <Stack.Screen  name="MY" component={MY_home_screen} />
        <Stack.Screen  name="Event" component={Event_home_screen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
