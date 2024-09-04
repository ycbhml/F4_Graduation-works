//页面展示具体内容


import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EventDetailScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={styles.detailContainer}>
      <Image source={item.image} style={styles.detailImage} />
      <Text style={styles.detailTitle}>{item.title}</Text>
      <Text style={styles.detailDescription}>{item.description}</Text>
      <Text style={styles.detailDate}>{item.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  detailImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  detailDate: {
    fontSize: 14,
    color: '#aaa',
  },
});

export default EventDetailScreen;
