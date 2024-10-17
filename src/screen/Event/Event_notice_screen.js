import * as React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import EventDetailScreen from './Event_Detail/Event_Detail_screen';  // 引入事件详情页面
import { getEvents, addEvent } from '../../components/Event/Event_notice_data';

// 内容由 Event_event_ata.js 导入
const NoticeListScreen = ({ navigation }) => {
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
        keyExtractor={item => item.id}  // 保证每个项目有唯一的键
        contentContainerStyle={styles.listContent}  // 滚动内容的样式
      />
    );
};

// stack navigator
const Stack = createStackNavigator();

const EventStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="NoticeList" 
        component={NoticeListScreen} 
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
    paddingBottom: 20,  // 确保在滚动的底部有足够的空间
    paddingTop: 10,     // 顶部间距
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,  // 确保每个卡片之间有间距
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    borderColor: 'red',
    borderWidth: 2,  // 红色边框
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  date: {
    fontSize: 12,
    color: '#aaa',
  },
});

export default EventStackNavigator;
