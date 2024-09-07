import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const LOLItemShow = ({ route, navigation }) => {
  const { item } = route.params;

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

    return () => {
      navigation.getParent()?.setOptions({ tabBarStyle: undefined });
    };
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text>Name: {item.name}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Other Attribute: Example</Text>
      {/* compound_img 部分 */}
      <Image source={item.compound_img} style={styles.compoundImage} />
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width * 0.25,
    marginBottom: 20,
  },
  compoundImage: {
    width: width * 0.6,
    height: width * 0.3,
    marginTop: 20,
  },
});

export default LOLItemShow;
