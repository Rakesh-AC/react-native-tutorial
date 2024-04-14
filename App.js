import { Alert, Text, View, findNodeHandle, Linking } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ProfilCard } from "./components/ProfilCard/ProfilCard";
import { useState } from "react";


export default function App() {
  
  function goToSocialLinks(socialPressed){
    if(socialPressed === "github"){
      console.log("Pressed "+socialPressed);
      Linking.openURL("https://github.com/Rakesh-AC");
    }else if(socialPressed === 'linkedin'){
      console.log("Pressed "+socialPressed)
      Linking.openURL("https://github.com/Rakesh-AC");
    }else if(socialPressed === "twitter"){
      console.log("Pressed "+socialPressed)
      Linking.openURL("https://github.com/Rakesh-AC");
    }else{
      Alert.alert("no social media to selected but still this is function is working ")
    }
  }
  

  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding:20}}>
        <ProfilCard  firstName="Rakesh" lastName="AC" onPressSocialMedia={goToSocialLinks} />
      </SafeAreaView>
    </SafeAreaProvider>
  );

}