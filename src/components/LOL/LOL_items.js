// src/components/LOL/LOL_items.js
//warrior, mage, assassin, support, shooter, tank
//   战士,  法师,     刺客，    辅助，   射手， 坦克


export const ICON_DATA = [
    { id: '1', name: 'item_name_1_warrior_assassin', description: 'item_1', image: require('../../assets/lol_items/item_1.jpg'), compound_img:require('../../assets/lol_items/item_1.jpg') },
    { id: '2', name: 'item_name_2_shooter', description: 'item_2', image: require('../../assets/lol_items/item_2.png'), compound_img:require('../../assets/lol_items/item_2.png') },
    { id: '3', name: 'item_name_3_tank', description: 'item_3', image: require('../../assets/lol_items/item_3.png'), compound_img:require('../../assets/lol_items/item_3.png') },
    { id: '4', name: 'item_name_4_mage_assassin', description: 'item_4', image: require('../../assets/lol_items/item_4.png'), compound_img:require('../../assets/lol_items/item_4.png') },
    { id: '5', name: 'item_name_5_tank_support', description: 'item_5', image: require('../../assets/lol_items/item_5.jpg'), compound_img:require('../../assets/lol_items/item_5.jpg') },
    // 添加更多图标...
  ];
  
  export const filterIconsByName = (name) => {
    return ICON_DATA.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
  };