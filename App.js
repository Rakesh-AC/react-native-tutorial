import { Alert, Text, View, findNodeHandle, Linking, Platform } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ProfilCard } from "./components/ProfilCard/ProfilCard";
import { useState } from "react";


export default function App() {
  
  
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding:20}}>
        {Platform.OS === 'android' && <Text>Android</Text>}
        {Platform.OS === 'ios' && <Text>IOS</Text>}
        {/* <ProfilCard  firstName="Rakesh" lastName="AC" onPressSocialMedia={goToSocialLinks} /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );

}