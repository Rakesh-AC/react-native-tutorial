import { Text, View, Image, TouchableOpacity } from "react-native";
import { s } from "./ProfilCard.style";
import { FontAwesome } from '@expo/vector-icons';

export function ProfilCard({firstName, lastName,helloCallBackFunc}) {

  function caller(){
    helloCallBackFunc(firstName, lastName);
  }

  
  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
        <View style={s.texts}>
          <TouchableOpacity onPress={caller}>
            <Text style={s.name}>{firstName} {lastName}</Text>
          </TouchableOpacity>
          
          <Text>
            Hi I am React native developer, let's get in touch, and soon 
          </Text>
        </View>
      </View>
      <View style={s.social}>

        <TouchableOpacity style={s.socialButton}>
          <FontAwesome name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>

        <TouchableOpacity style={s.socialButton}>
          <FontAwesome name="linkedin-square" size={24} color="#0A66C2" />
        </TouchableOpacity>

        <TouchableOpacity style={s.socialButton}>
          <FontAwesome name="github" size={24} color="black" />
        </TouchableOpacity>
        
      </View>
    </View>
  );
}