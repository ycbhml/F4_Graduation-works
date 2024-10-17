import * as React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import EventDetailScreen from './Event_Detail/Event_Detail_screen';  // 详细事件页面
import { getEvents } from '../../components/Event/Event_event_data';   // 事件list

// 获取屏幕的宽度和高度
const { width, height } = Dimensions.get('window');

// 内容由 Event_event_data.js 导入
const EventListScreen = ({ navigation }) => {
    const events = getEvents();

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('EventDetail', { item })}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={events}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContent} // 确保在滚动的底部有足够的空间
        />
    );
};

// Stack navigator
const Stack = createStackNavigator();

const EventStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="EventList"
                component={EventListScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EventDetail"
                component={EventDetailScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

// 样式
const styles = StyleSheet.create({
    listContent: {
        paddingBottom: height * 0.05,  // 动态设置底部间距以确保平滑滚动
    },
    card: {
        flexDirection: 'row',
        padding: width * 0.03,  // 动态设置内边距
        margin: width * 0.03,  // 动态设置外边距
        backgroundColor: '#fff',
        borderRadius: width * 0.02,  // 动态圆角
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    image: {
        width: width * 0.2,  // 图片占据屏幕宽度的20%
        height: width * 0.2,  // 图片保持正方形
        borderRadius: width * 0.02,  // 动态圆角
        borderColor: 'red',
        borderWidth: 2,  // 红色边框
    },
    textContainer: {
        flex: 1,
        paddingLeft: width * 0.03,  // 动态设置左侧内边距
        justifyContent: 'center',
    },
    title: {
        fontSize: width * 0.045,  // 动态字体大小
        fontWeight: 'bold',
    },
    description: {
        fontSize: width * 0.035,  // 动态字体大小
        color: '#666',
    },
    date: {
        fontSize: width * 0.03,  // 动态字体大小
        color: '#aaa',
    },
});

export default EventStackNavigator;
