import { Text, TouchableOpacity } from "react-native"
import { useState } from "react";


export function AgeCounter(){

    let [age,  setAge] = useState(26);
    
    return (
        <>
        <TouchableOpacity onPress={()=>setAge(++age)} style={{backgroundColor:"lightgreen", alignItems:"center"}}>
            <Text style={{fontSize:20}}>Increase Age</Text>
        </TouchableOpacity>
        <Text style={{alignItems:"center", fontSize:20}}>
            Im {age} years old !
        </Text>
        </>
    )
}