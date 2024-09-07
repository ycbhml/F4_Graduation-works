export const RUNES_DATA = [
    {
      id: '1_1',
      name: 'Electrocute', // 符文的名字 电刑
      filter: 'red',
      description: 'This rune enhances attack damage and speed.', // 介绍
      image: require('../../assets/lol_runes/red/1_1_Electrocute.png'), // 符文图片路径
    },
    {
      id: '1_2',
      name: 'DarkHarvest',  //黑暗收割
      filter: 'red', 
      description: 'This rune enhances defense and reduces damage.',
      image: require('../../assets/lol_runes/red/1_2_DarkHarvest.png'),
    },
    {
      id: '1_3',
      name: 'HailOfBlades', //丛刃
      filter: 'red',
      description: 'This rune increases magic power and mana regeneration.',
      image: require('../../assets/lol_runes/red/1_3_HailOfBlades.png'),
    },
    {
      id: '2_1',
      name: '2_1_CheapShot',    //恶意重伤
      filter: 'red',
      description: 'This rune enhances critical damage and attack speed.',
      image: require('../../assets/lol_runes/red/2_1_CheapShot.png'),
    },
    {
      id: '2_2',
      name: '2_2_GreenTerror_TasteOfBlood',     //血之滋味
      filter: 'red',
      description: 'This rune improves movement speed and reduces cooldown.',
      image: require('../../assets/lol_runes/red/2_2_GreenTerror_TasteOfBlood.png'),
    },
    {
      id: '2_3',
      name: '2_3_SuddenImpact', //猛然冲击
      filter: 'red',
      description: 'This rune improves movement speed and reduces cooldown.',
      image: require('../../assets/lol_runes/red/2_3_SuddenImpact.png'),
    },
    {
      id: '3_1',
      name: '3_1_ZombieWard',   //僵尸守卫
      filter: 'red',
      description: 'This rune improves movement speed and reduces cooldown.',
      image: require('../../assets/lol_runes/red/3_1_ZombieWard.png'),
    },
    {
      id: '3_2',
      name: '3_2_GhostPoro',    //幽灵魄罗
      filter: 'red', 
      description: 'This rune improves movement speed and reduces cooldown.',
      image: require('../../assets/lol_runes/red/3_2_GhostPoro.png'),
    },
    {
      id: '3_3',
      name: '3_3_EyeballCollection',    //眼球收集器
      filter: 'red',
      description: 'This rune improves movement speed and reduces cooldown.',
      image: require('../../assets/lol_runes/red/3_3_EyeballCollection.png'),
    },
    {
      id: '4_1',
      name: '4_1_TreasureHunter',   //寻宝猎人
      filter: 'red',
      description: 'This rune improves movement speed and reduces cooldown.',
      image: require('../../assets/lol_runes/red/4_1_TreasureHunter.png'),
    },
    {
      id: '4_2',
      name: '4_2_RelentlessHunter', //迅捷猎手
      filter: 'red',
      description: 'This rune improves movement speed and reduces cooldown.',
      image: require('../../assets/lol_runes/red/4_2_RelentlessHunter.png'),
    },
    {
      id: '4_3',
      name: '4_3_UltimateHunter',   //终极猎手
      filter: 'red',
      description: 'This rune improves movement speed and reduces cooldown.',
      image: require('../../assets/lol_runes/red/4_3_UltimateHunter.png'),
    },
  ];
  
  // 用于根据filter进行筛选符文
  export const filterRunesByType = (type) => {
    return RUNES_DATA.filter(rune => rune.filter === type);
  };
  