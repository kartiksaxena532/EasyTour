import { View, Text,ScrollView,Dimensions} from 'react-native'
import React from 'react'
import Header1 from '../Components/Favourite/Header1'
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../Shared/Colors";
import ChatScreen from '../Components/Favourite/ChatScreen';

export default function Fav() {
  return (
    <ScrollView style={{backgroundColor:'#fff',flex:1}}>
      <LinearGradient
        colors={[Colors.WHITE, "transparent"]}
        style={{ padding: 20, width: Dimensions.get("screen").width }}
      >
    <Header1/>
    </LinearGradient>
    <View style={{paddingTop:5,paddingLeft:20}}>
    <Text style={{fontSize:30}}>Favourites</Text>
   <Text>Here Are Some Of Your Favourite Places Kartik Saxena</Text>  
   <ChatScreen/>
    
</View>
</ScrollView>
  )
}

