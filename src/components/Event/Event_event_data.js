// event data.js

let events = [
    { id: '1', title: 'Event 1', description: 'Description 1', date: '2023-09-01', image: require('../../assets/event_images/test_1.png') },
    { id: '2', title: 'Event 2', description: 'Description 2', date: '2023-09-02', image: require('../../assets/event_images/test_2.jpg') },
    // 你可以继续添加更多初始事件...
];

// 获取所有事件
export const getEvents = () => {
    return events;
};
  
// 添加新事件
export const addEvent = (id, title, description, date, image) => {
    const newEvent = { id, title, description, date, image };
    events.push(newEvent);
    return newEvent;
};
  
// 根据ID获取单个事件
export const getEventById = (id) => {
    return events.find(event => event.id === id);
};