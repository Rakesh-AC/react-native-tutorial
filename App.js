import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Profile  from './components/profile';
export default function App() {
  const [name, setName] = useState('');

  const handleChangeText = (text) => {
    setName(text);
  };

  return (
    <View style={styles.container}>
      <Text>Hello, {name}!</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        value={name}
        placeholder="Enter your name"
      />
      <Button title="Greet Me" onPress={() => console.log(`Hello, ${name}!`)} />
      {/* <StatusBar style="auto" /> */}

      <Profile></Profile>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
