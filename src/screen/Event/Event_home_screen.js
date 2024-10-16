import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const EventHomeScreen = () => {
    return (
        <WebView
            source={{ uri: 'https://www.leagueoflegends.com/ko-kr/news/notices/' }} // 设置要加载的URL
            style={styles.webview} // 应用样式
        />
    );
};

const styles = StyleSheet.create({
    webview: {
        flex: 1, // 使 WebView 填满整个页面
    },
});

export default EventHomeScreen;