import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const LOLHeroShow = ({ route, navigation }) => {
  const { item } = route.params; // 获取传递的英雄数据
  const [selectedSkill, setSelectedSkill] = useState(item.spells[0]);

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
    return () => {
      navigation.getParent()?.setOptions({ tabBarStyle: undefined });
    };
  }, [navigation]);

  const handleSkillPress = (spell) => {
    setSelectedSkill(spell);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.heroBackgroundContainer}>
        <Image source={item.background_image} style={styles.heroBackground} />
        <Text style={styles.heroNameOnBackground}>{item.name}</Text>
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.descriptionText}>    {item.lore}</Text>
      </View>

      <View style={styles.skillRow}>
        {[item.passive, ...item.spells].map((spell, index) => {
          if (spell && spell.image) { // 确保 spell 和 spell.image 存在
            return (
              <TouchableOpacity key={index} onPress={() => handleSkillPress(spell)} style={styles.skillButton}>
                <Image
                  source={spell.image}
                  style={[
                    styles.skillIcon,
                    selectedSkill.name === spell.name && styles.selectedSkillIcon,
                  ]}
                />
              </TouchableOpacity>
            );
          } else {
            console.warn('Spell or Spell image is undefined:', spell);  // 输出调试信息
            return null;
          }
        })}
      </View>

      
      <View style={styles.skillDescriptionContainer}>
        <Text style={styles.skillName}>{selectedSkill.name}</Text>
        <Text style={styles.skillDescription}>
          {selectedSkill.description}{"\n\n"}
          CD: {selectedSkill.cooldownBurn}
        </Text>
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: width * 0.03,
    alignItems: 'center',
  },
  heroBackgroundContainer: {
    width: '100%',
    height: height * 0.3,
    position: 'relative',
  },
  heroBackground: {
    width: '110%',
    height: '100%',
    resizeMode: 'cover',
    transform: [{ translateX: -width * 0.05 }],
  },
  heroNameOnBackground: {
    position: 'absolute',
    bottom: height * 0.02,
    left: width * 0.05,
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  skillRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: width * 0.01,
    marginBottom: height * 0.02,
  },
  skillIcon: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: (width * 0.15) / 2,
  },
  selectedSkillIcon: {
    transform: [{ scale: 1.2 }],
  },
  skillDescriptionContainer: {
    width: '100%',
    paddingHorizontal: width * 0.05,
  },
  skillName: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
  },
  skillDescription: {
    fontSize: width * 0.045,
    textAlign: 'left',
  },
  descriptionView: {
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default LOLHeroShow;
