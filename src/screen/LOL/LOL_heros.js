import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { HERO_DATA, filterHeroesByName } from '../../components/LOL/LOL_hero_icons'; // 确保路径正确
import { createStackNavigator } from '@react-navigation/stack';
import LOLHeroShow from './LOL_show/LOL_hero_show'; // 确保路径正确

const Stack = createStackNavigator();

const LOLHeroList = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(HERO_DATA);

  const { setSwipeEnabled } = route?.params || {};

  useEffect(() => {
    if (setSwipeEnabled) {
      setSwipeEnabled(true);
    }
    return () => setSwipeEnabled && setSwipeEnabled(true);
  }, [setSwipeEnabled]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    setFilteredData(filterHeroesByName(text));
  };

  const handleIconPress = (item) => {
    if (setSwipeEnabled) {
      setSwipeEnabled(false);
    }
    // 使用 callback 传递完整的 item
    navigation.navigate('HeroDetail', { item });
  };

  const renderIconItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleIconPress(item)} style={styles.iconContainer}>
      <Image source={item.image} style={styles.iconImage} />
      <Text style={styles.heroName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.gridContainer}>
       <View style={styles.filterBar}>
        {/*
        <Text>search road</Text>
        */}

        <TouchableOpacity onPress={() => setFilteredData(HERO_DATA.filter(item => item.id.includes('top')))} style={styles.filterButton}>
          <Image source={require('../../assets/images/lol/top.png')} style={styles.filterIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilteredData(HERO_DATA.filter(item => item.id.includes('mid')))} style={styles.filterButton}>
          <Image source={require('../../assets/images/lol/mid.png')} style={styles.filterIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilteredData(HERO_DATA.filter(item => item.id.includes('jug')))} style={styles.filterButton}>
          <Image source={require('../../assets/images/lol/jug.png')} style={styles.filterIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilteredData(HERO_DATA.filter(item => item.id.includes('adc')))} style={styles.filterButton}>
          <Image source={require('../../assets/images/lol/adc.png')} style={styles.filterIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilteredData(HERO_DATA.filter(item => item.id.includes('sup')))} style={styles.filterButton}>
          <Image source={require('../../assets/images/lol/sup.png')} style={styles.filterIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilteredData(HERO_DATA)} style={styles.filterButton}>
          <Text>All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconListContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Hero..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <FlatList
          data={filteredData}
          renderItem={renderIconItem}
          keyExtractor={item => item.id}
          numColumns={4}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </View>
  );
};

const LOLHeroScreen = ({ route }) => {
  const { setSwipeEnabled } = route?.params || {};
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HeroList"
        component={LOLHeroList}
        options={{ headerShown: false }}
        initialParams={{ setSwipeEnabled }}
      />
      <Stack.Screen
        name="HeroDetail"
        component={LOLHeroShow}
        options={{ title: 'Hero Detail' }}
      />
    </Stack.Navigator>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  iconListContainer: {
    flex: 1,
    padding: width * 0.025,
  },
  filterBar: {
    width: width * 0.21,
    backgroundColor: '#f0f0f0',
    padding: height * 0.02,
    alignItems: 'flex-start',
    height: '100%',  // 保持筛选栏占据整个屏幕高度
  },
  filterButton: {
    padding: height * 0.015,
    backgroundColor: '#ddd',
    borderRadius: width * 0.02,
    marginVertical: height * 0.01,
    width: width * 0.13,
    alignItems: 'center',
  },
  filterIcon: {
    width: width * 0.08,
    height: width * 0.08,
  },
  searchBar: {
    height: height * 0.05,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: width * 0.02,
    paddingLeft: width * 0.03,
    marginBottom: height * 0.02,
    backgroundColor: '#fff',
  },
  flatListContent: {
    paddingBottom: height * 0.01,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconContainer: {
    width: width * 0.18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  iconImage: {
    width: width * 0.15,
    height: width * 0.15,
    marginBottom: height * 0.001,
  },
  heroName: {
    textAlign: 'center',
    fontSize: 10,
    marginTop: height * 0.0002,
    marginBottom: height * 0.004,
  },
});

export default LOLHeroScreen;
