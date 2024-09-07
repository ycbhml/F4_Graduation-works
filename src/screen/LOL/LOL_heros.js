import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { ICON_DATA, filterIconsByName } from '../../components/LOL/LOL_hero_icons';
import { createStackNavigator } from '@react-navigation/stack';
import LOLHeroShow from './LOL_show/LOL_hero_show';

const Stack = createStackNavigator();

const LOLHeroList = ({ navigation, route }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(ICON_DATA);

  const { setSwipeEnabled } = route?.params || {};

  useEffect(() => {
    if (setSwipeEnabled) {
      setSwipeEnabled(true);
    }
    return () => setSwipeEnabled && setSwipeEnabled(true);
  }, [setSwipeEnabled]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    setFilteredData(filterIconsByName(text));
  };

  const handleIconPress = (item) => {
    if (setSwipeEnabled) {
      setSwipeEnabled(false);
    }
    navigation.navigate('HeroDetail', { item });
  };

  const renderIconItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleIconPress(item)} style={styles.iconContainer}>
      <Image source={item.image} style={styles.iconImage} />
      <Text>{item.description}</Text>
    </TouchableOpacity>
  );

  const handleFilterByCharacterTop = () => {
    setFilteredData(ICON_DATA.filter(item => item.name.includes('top')));
  };

  const handleFilterByCharacterMid = () => {
    setFilteredData(ICON_DATA.filter(item => item.name.includes('mid')));
  };

  const handleFilterByCharacterJug = () => {
    setFilteredData(ICON_DATA.filter(item => item.name.includes('jug')));
  };

  const handleFilterByCharacterADc = () => {
    setFilteredData(ICON_DATA.filter(item => item.name.includes('adc')));
  };

  const handleFilterByCharacterSup = () => {
    setFilteredData(ICON_DATA.filter(item => item.name.includes('sup')));
  };

  const resetFilter = () => {
    setFilteredData(ICON_DATA);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.gridContainer}>
        {/* 筛选栏移至左侧 */}
        <View style={styles.filterBar}>
          <Text>search road</Text>
          <TouchableOpacity onPress={handleFilterByCharacterTop} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/top.png')} style={styles.filterIcon} />
            <Text>Top</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFilterByCharacterMid} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/mid.png')} style={styles.filterIcon} />
            <Text>Mid</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFilterByCharacterJug} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/jug.png')} style={styles.filterIcon} />
            <Text>Jug</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFilterByCharacterADc} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/adc.png')} style={styles.filterIcon} />
            <Text>ADc</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFilterByCharacterSup} style={styles.filterButton}>
            <Image source={require('../../assets/images/lol/sup.png')} style={styles.filterIcon} />
            <Text>Sup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={resetFilter} style={styles.filterButton}>
            <Text>All</Text>
          </TouchableOpacity>
        </View>

        {/* 图标展示区 */}
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
    </ScrollView>
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
  scrollContainer: {
    flexGrow: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  filterBar: {
    width: width * 0.21,
    backgroundColor: '#f0f0f0',
    padding: height * 0.02,
    alignItems: 'flex-start',
  },
  filterButton: {
    padding: height * 0.015,
    backgroundColor: '#ddd',
    borderRadius: width * 0.02,
    marginVertical: height * 0.01,
    width: '100%',
    alignItems: 'center',
  },
  filterIcon: {
    width: width * 0.08,
    height: width * 0.08,
  },
  iconListContainer: {
    flex: 1,
    padding: width * 0.025,
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
    paddingBottom: height * 0.05,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: width * 0.01,
  },
  iconImage: {
    width: width * 0.15,
    height: width * 0.15,
    marginBottom: height * 0.01,
  },
});

export default LOLHeroScreen;
