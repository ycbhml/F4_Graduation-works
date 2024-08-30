import React, { useState } from 'react';
import { TextInput, StyleSheet, View, ImageBackground, Alert, Button, Dimensions, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const saveCredentials = async () => {
    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
      Alert.alert('保存成功', '账号和密码已保存');
    } catch (error) {
      Alert.alert('错误', '保存失败');
    }
  };

  const checkCredentials = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');

      if (storedUsername === username && storedPassword === password) {
        Alert.alert('成功', '登录成功');
        navigation.navigate('Home');
      } else {
        Alert.alert('错误', '账号或密码不正确');
      }
    } catch (error) {
      Alert.alert('错误', '验证失败');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/login_backgroudImg.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.label}>id</Text>
        <TextInput
          placeholder="///"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <Text style={styles.label}>后缀</Text>
        <TextInput
          placeholder="///"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button title="save" onPress={saveCredentials} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="login" onPress={checkCredentials} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: Dimensions.get('window').height / 2
  },
  input: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginVertical: 5,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginRight: Dimensions.get('window').width / 2.5
  }
});

export default LoginScreen;
