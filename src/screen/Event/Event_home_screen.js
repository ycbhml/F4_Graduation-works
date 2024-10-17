import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

const EventHomeScreen = () => {
    const webviewRef = useRef(null); // 创建 WebView 引用
    const [key, setKey] = useState(0); // 用于强制刷新 WebView

    // 刷新并重新加载指定 URL 的函数
    const handleReload = () => {
        setKey(prevKey => prevKey + 1); // 通过更新 key 来强制 WebView 重新加载
    };

    return (
        <View style={styles.container}>
            <WebView
                key={key} // 使用 key 来强制 WebView 重新渲染
                ref={webviewRef}
                source={{ uri: 'https://www.leagueoflegends.com/ko-kr/news/notices/' }}
                style={styles.webview}
                onError={() => alert('网页加载失败，请检查您的网络连接。')}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleReload}>
                    <Text style={styles.buttonText}>공지상항 들어가==》</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1,
    },
    buttonContainer: {
        padding: 10, 
        backgroundColor: '#F8F8F8', // 底部按钮的背景颜色
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default EventHomeScreen;