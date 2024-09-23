import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LOLHeroList from './LOL_heros'; // 使用你更改后的文件名
import LOLHeroShow from './LOL_hero_show'; // 保持原来的文件名

const Stack = createStackNavigator();

const LOLHeroNavigator = ({ route, navigation }) => {
  const { setSwipeEnabled } = route?.params || {};

  // 当英雄被选中时调用，进行导航
  const handleHeroSelect = (id) => {
    navigation.navigate('HeroDetail', { id });
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HeroList"
        options={{ headerShown: false }}
        initialParams={{ setSwipeEnabled }}
      >
        {(props) => <LOLHeroList {...props} onHeroSelect={handleHeroSelect} />}
      </Stack.Screen>
      <Stack.Screen
        name="HeroDetail"
        component={LOLHeroShow}
        options={{ title: 'Hero Detail' }}
      />
    </Stack.Navigator>
  );
};

export default LOLHeroNavigator;
