import * as React from 'react';
import { View, StyleSheet, Dimensions, Image, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Event_home_screen from './Event/Event_home_screen';
import LOL_home_screen from './LOL/LOL_home_screen';
import TFT_home_screen from './TFT/TFT_home_screen';
import MY_home_screen from './MY/MY_home_screen';
import RNFS from 'react-native-fs';
import { unzip } from 'react-native-zip-archive';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {


  {/*
  // 当前版本号
  const currentVersion = '1.0.0';

  // 检查更新
  const checkForUpdates = async () => {
    try {
      // 发送请求获取更新
      const response = await fetch('https://yourserver.com/api/check-update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ version: currentVersion }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.updateAvailable) {
          // 假设 data 包含下载 URL
          const zipUrl = data.updateUrl;
          const localZipPath = `${RNFS.DocumentDirectoryPath}/update.zip`;

          // 下载更新文件
          const downloadResponse = await RNFS.downloadFile({
            fromUrl: zipUrl,
            toFile: localZipPath,
          }).promise;

          if (downloadResponse.statusCode === 200) {
            // 解压缩文件
            const unzipPath = `${RNFS.DocumentDirectoryPath}/update`;
            await unzip(localZipPath, unzipPath);

            // 复制文件到指定位置
            await RNFS.copyFile(`${unzipPath}/newFile.js`, `${RNFS.DocumentDirectoryPath}/newFile.js`);
            await RNFS.copyFile(`${unzipPath}/image.png`, `${RNFS.DocumentDirectoryPath}/image.png`);

            Alert.alert('更新成功', '应用已更新到最新版本');
          } else {
            Alert.alert('下载失败', '更新文件下载失败，请重试。');
          }
        } else {
          console.log('已是最新版本');
        }
      } else {
        Alert.alert('更新检查失败', '无法检查更新，请重试。');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('错误', '更新过程中出现错误，请重试。');
    }
  };

  // 使用 useEffect 在组件挂载时自动检查更新
  React.useEffect(() => {
    checkForUpdates(); // 应用启动时自动检查更新
  }, []);

  */}

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
                ? require('../assets/images/event_active.png')
                : require('../assets/images/event_common.png');
            } else if (route.name === 'LOL') {
              iconName = focused
                ? require('../assets/images/lol_active.png')
                : require('../assets/images/lol_common.png');
            } else if (route.name === 'TFT') {
              iconName = focused
                ? require('../assets/images/tft_active.png')
                : require('../assets/images/tft_common.png');
            } else if (route.name === 'MY') {
              iconName = focused
                ? require('../assets/images/my_active.png')
                : require('../assets/images/my_common.png');
            }

            return <Image 
              source={iconName} 
              style={{ 
                width: Dimensions.get('window').width / 15, 
                height: Dimensions.get('window').height / 30,
                transform: [{ scale: 1.1 }]
              }} />;
          },
          tabBarStyle: { height: Dimensions.get('window').height / 15 },
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
