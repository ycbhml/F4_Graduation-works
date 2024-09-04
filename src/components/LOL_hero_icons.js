// lol hero icons

export const ICON_DATA = [
    { id: '1', name: 'Champion1', image: require('../assets/images/champion1.png') },
    { id: '2', name: 'Champion2', image: require('../assets/images/champion2.png') },
    { id: '3', name: 'Champion3', image: require('../assets/images/champion3.png') },
    { id: '4', name: 'Champion4', image: require('../assets/images/champion4.png') },
    { id: '5', name: 'Champion5', image: require('../assets/images/champion5.png') },
    // 添加更多图标...
  ];
  
  export const filterIconsByName = (name) => {
    return ICON_DATA.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
  };
  