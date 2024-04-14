import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ProfilCard } from "./components/ProfilCard/ProfilCard";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding:20}}>
        <ProfilCard
          firstName="John"
          lastName="Doe"
          age={35}
          description="Python web Developer with 2 years of experience in django"
          is_alive={true}
          metaData={{"city":"bengalore", "country": "India" }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}