import { Alert, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ProfilCard } from "./components/ProfilCard/ProfilCard";
import {AgeCounter} from "./components/AgeCounter/AgeCounter";
import { useState } from "react";


export default function App() {

  let [count, setCount] = useState(0);
  function Hello(firstName, lastName){
    Alert.alert("Hello "+ firstName +" "+lastName+"!");
    setCount(count+1);
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding:20}}>
        <ProfilCard helloCallBackFunc={Hello} firstName="Rakesh" lastName="AC" />
        <Text style={{fontSize:20}}>we showed alert for {count} times </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
  
}