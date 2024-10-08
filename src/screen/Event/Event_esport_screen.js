import * as React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import EventDetailScreen from './Event_Detail/Event_Detail_screen';  // 引入事件详情页面
import { getEvents } from '../../components/Event/Event_esports_data'; // 从数据源获取事件列表

// 内容由 Event_esports_data.js 导入
const EsportsListScreen = ({ navigation }) => {
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
        contentContainerStyle={styles.listContent}  // 添加列表内容样式
      />
    );
};

// Stack Navigator
const Stack = createStackNavigator();

const EventStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="EsportsList" 
        component={EsportsListScreen} 
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
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
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
