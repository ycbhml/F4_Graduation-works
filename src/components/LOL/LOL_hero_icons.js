// src/components/LOL/LOL_hero_icons.js

export const ICON_DATA = [
  { id: '1', name: 'hero_name_1_top', description: 'hero_1', image: require('../../assets/lol_hero_icon/hero_icon_1.png') },
  { id: '2', name: 'hero_name_2_mid', description: 'hero_2', image: require('../../assets/lol_hero_icon/hero_icon_2.jpg') },
  { id: '3', name: 'hero_name_3_jug', description: 'hero_3', image: require('../../assets/lol_hero_icon/hero_icon_3.jpg') },
  { id: '4', name: 'hero_name_4_sup_jug', description: 'hero_4', image: require('../../assets/lol_hero_icon/hero_icon_4.jpg') },
  // 添加更多图标...
];

export const filterIconsByName = (name) => {
  return ICON_DATA.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
};