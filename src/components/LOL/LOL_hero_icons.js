// src/components/LOL/LOL_hero_icons.js

export const ICON_DATA = [
  { 
    id: '1',
    name: 'hero_name_1_top',
    description: 'hero_1',
    image: require('../../assets/lol_hero_icon/hero_icon_1.png'),
    
    skill_0: 'hero_1_skill_0',
    skill_0_description: 'skill_0_description',
    skill_0_icon: require('../../assets/lol_hero_icon/hero_icon_1.png'),
    
    skill_1: 'hero_1_skill_1',
    skill_1_description: 'skill_1_description',
    skill_1_icon: require('../../assets/lol_hero_icon/hero_icon_1.png'),
    
    skill_2: 'hero_1_skill_2',
    skill_2_description: 'skill_2_description',
    skill_2_icon: require('../../assets/lol_hero_icon/hero_icon_1.png'),
    
    skill_3: 'hero_1_skill_3',
    skill_3_description: 'skill_3_description',
    skill_3_icon: require('../../assets/lol_hero_icon/hero_icon_1.png'),

    skill_4: 'hero_1_skill_4',
    skill_4_description: 'skill_4_description',
    skill_4_icon: require('../../assets/lol_hero_icon/hero_icon_1.png'),

    skill_5: 'hero_1_skill_5',
    skill_5_description: 'skill_5_description',
    skill_5_icon: require('../../assets/lol_hero_icon/hero_icon_1.png'),
  },
  { 
    id: '2',
    name: 'hero_name_2_mid',
    description: 'hero_2',
    image: require('../../assets/lol_hero_icon/hero_icon_2.jpg'),
    
    skill_0: 'hero_2_skill_0',
    skill_0_description: 'skill_0_description',
    skill_0_icon: require('../../assets/lol_hero_icon/hero_icon_2.jpg'),
    
    skill_1: 'hero_2_skill_1',
    skill_1_description: 'skill_1_description',
    skill_1_icon: require('../../assets/lol_hero_icon/hero_icon_2.jpg'),
    
    skill_2: 'hero_2_skill_2',
    skill_2_description: 'skill_2_description',
    skill_2_icon: require('../../assets/lol_hero_icon/hero_icon_2.jpg'),
    
    skill_3: 'hero_2_skill_3',
    skill_3_description: 'skill_3_description',
    skill_3_icon: require('../../assets/lol_hero_icon/hero_icon_2.jpg'),

    skill_4: 'hero_2_skill_4',
    skill_4_description: 'skill_4_description',
    skill_4_icon: require('../../assets/lol_hero_icon/hero_icon_2.jpg'),

    skill_5: 'hero_2_skill_5',
    skill_5_description: 'skill_5_description',
    skill_5_icon: require('../../assets/lol_hero_icon/hero_icon_2.jpg'),
  },
  { 
    id: '3',
    name: 'hero_name_3_jug',
    description: 'hero_3',
    image: require('../../assets/lol_hero_icon/hero_icon_3.jpg'),
    
    skill_0: 'hero_3_skill_0',
    skill_0_description: 'skill_0_description',
    skill_0_icon: require('../../assets/lol_hero_icon/hero_icon_3.jpg'),
    
    skill_1: 'hero_3_skill_1',
    skill_1_description: 'skill_1_description',
    skill_1_icon: require('../../assets/lol_hero_icon/hero_icon_3.jpg'),
    
    skill_2: 'hero_3_skill_2',
    skill_2_description: 'skill_2_description',
    skill_2_icon: require('../../assets/lol_hero_icon/hero_icon_3.jpg'),
    
    skill_3: 'hero_3_skill_3',
    skill_3_description: 'skill_3_description',
    skill_3_icon: require('../../assets/lol_hero_icon/hero_icon_3.jpg'),

    skill_4: 'hero_3_skill_4',
    skill_4_description: 'skill_4_description',
    skill_4_icon: require('../../assets/lol_hero_icon/hero_icon_3.jpg'),

    skill_5: 'hero_3_skill_5',
    skill_5_description: 'skill_5_description',
    skill_5_icon: require('../../assets/lol_hero_icon/hero_icon_3.jpg'),
  },
  { 
    id: '4',
    name: 'hero_name_4_sup_jug',
    description: 'hero_4',
    image: require('../../assets/lol_hero_icon/hero_icon_4.jpg'),
    
    skill_0: 'hero_4_skill_0',
    skill_0_description: 'skill_0_description',
    skill_0_icon: require('../../assets/lol_hero_icon/hero_icon_4.jpg'),
    
    skill_1: 'hero_4_skill_1',
    skill_1_description: 'skill_1_description',
    skill_1_icon: require('../../assets/lol_hero_icon/hero_icon_4.jpg'),
    
    skill_2: 'hero_4_skill_2',
    skill_2_description: 'skill_2_description',
    skill_2_icon: require('../../assets/lol_hero_icon/hero_icon_4.jpg'),
    
    skill_3: 'hero_4_skill_3',
    skill_3_description: 'skill_3_description',
    skill_3_icon: require('../../assets/lol_hero_icon/hero_icon_4.jpg'),

    skill_4: 'hero_4_skill_4',
    skill_4_description: 'skill_4_description',
    skill_4_icon: require('../../assets/lol_hero_icon/hero_icon_4.jpg'),

    skill_5: 'hero_4_skill_5',
    skill_5_description: 'skill_5_description',
    skill_5_icon: require('../../assets/lol_hero_icon/hero_icon_4.jpg'),
  },
];

export const filterIconsByName = (name) => {
  return ICON_DATA.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
};