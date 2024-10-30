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
import { VersionProvider, useVersion } from './src/VersionContext';
import { CdragonDataProvider } from './src/CdragonDataContext';
import { ActivityIndicator, View } from 'react-native';

const Stack = createStackNavigator();

function AppContent() {
  const version = useVersion(); // 获取版本信息
  const shortVersion = version ? version.split('.').slice(0, 2).join('.') : null; // 确保 version 存在
  console.log("app.js shortversion", shortVersion);

  // 如果 version 或 shortVersion 为空，则显示加载指示器
  if (!version || !shortVersion) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <CdragonDataProvider shortVersion={shortVersion}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LOL" component={LOL_home_screen} />
        <Stack.Screen name="TFT" component={TFT_home_screen} />
        <Stack.Screen name="MY" component={MY_home_screen} />
        <Stack.Screen name="Event" component={Event_home_screen} />
      </Stack.Navigator>
    </CdragonDataProvider>
  );
}

function App() {
  return (
    <VersionProvider>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </VersionProvider>
  );
}

export default App;
