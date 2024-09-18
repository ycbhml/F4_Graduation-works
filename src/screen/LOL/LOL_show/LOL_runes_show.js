import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { RUNES_DATA, filterRunesByType } from '../../../components/LOL/LOL_runes'; // 假设数据从这个路径导入

const LOLRunesShow = ({ filter }) => {
  const [filteredRunes, setFilteredRunes] = useState([]);

  useEffect(() => {
    // 根据传入的 filter 参数筛选符文
    const filtered = filterRunesByType(filter);
    setFilteredRunes(filtered);
  }, [filter]);

  // 渲染符文项
  const renderRuneItem = ({ item }) => (
    <View style={styles.runeContainer}>
      <Image source={item.image} style={styles.runeImage} />
      <Text style={styles.runeName}>{item.name_kr}</Text>
      <Text style={styles.runeDescription}>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={filteredRunes}
      renderItem={renderRuneItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  runeContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  runeImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  runeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  runeDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  flatListContent: {
    paddingBottom: 20,
  },
});

export default LOLRunesShow;
