import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Profile  from './components/profile';
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={s.title}>Hello World!</Text>
        <View style={s.square}>
          <Text>TEXT </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}



const s = StyleSheet.create({
  title : {
    fontSize:100,
    marginVertical:15,
    textAlign:'center',
    
  },
  square:{
    width:100,
    height:100,
    backgroundColor:"green",
    
  }
})



