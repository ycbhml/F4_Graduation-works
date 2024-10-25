import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Tab1({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is Tab 1!</Text>
      {/* 你可以在这里添加更多内容，例如按钮、列表等 */}
      <Button
        title="Go to another page"
        onPress={() => navigation.navigate('SomeOtherPage')}
      />
    </View>
  );
}
