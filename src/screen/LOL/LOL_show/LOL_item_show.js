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
      <Text style={styles.title}>{item.name_kr}</Text>
      <Text style={styles.des}>  {item.description_kr}</Text>
      {item.into_image && (
        <Image source={item.into_image} style={styles.intoImage} />
      )}
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
    transform: [{scale: 0.8}]
  },
  compoundImage: {
    width: width * 0.6,
    height: width * 0.3,
    marginTop: 20,
  },
  intoImage: {
    width: width,
    height: width,
    marginTop: 20,
  },
  title: {
    fontSize: 40, // 设置字体大小
    fontWeight: 'bold', // 设置加粗
    marginBottom: 10,
  },
  des: {
    textAlign: 'left', // 左对齐
    alignSelf: 'stretch', // 使文本内容填充容器的宽度
    marginBottom: 20,
  }
});

export default LOLItemShow;
