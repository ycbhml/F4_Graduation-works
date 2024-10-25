import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Event_event_screen from './Event_event_screen'; // 引入子屏幕

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* 你可以根据需要选择渲染哪个屏幕 */}
      {/* 例如直接渲染 Event_event_screen */}
      <Event_event_screen />

      {/* 如果需要，也可以选择渲染其他屏幕 */}
      {/* <Event_notice_screen /> */}
      {/* <Event_esport_screen /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
