import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Profile  from './components/profile';
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import {s} from  "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex:1, flexDirection:"column", justifyContent:"space-evenly", alignItems:"center"}}>

       <View  style={s.box1}>
        
       </View>

       <View  style={s.box2}>

       </View>

       <View  style={s.box3}>

       </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}







