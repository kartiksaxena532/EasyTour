import { View, Text,ScrollView,Dimensions} from 'react-native'
import React from 'react'
import Header1 from '../Components/Favourite/Header1'
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../Shared/Colors";
<<<<<<< HEAD
import ChatScreen from '../Components/Favourite/ChatScreen';
=======
import ChatScreen from '../Components/Favourite/ChatScreen'

>>>>>>> 6f6f14bb347a821c28f1ffc4a25ae91b7716a033

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
<<<<<<< HEAD
    <Text style={{fontSize:30}}>Favourites</Text>
   <Text>Here Are Some Of Your Favourite Places Kartik Saxena</Text>  
   <ChatScreen/>
=======
    {/* <Text style={{fontSize:30}}>Favourites</Text>
   <Text>Here Are Some Of Your Favourite Places Kartik Saxena</Text> */}
     

   <ChatScreen />
   
>>>>>>> 6f6f14bb347a821c28f1ffc4a25ae91b7716a033
    
</View>
</ScrollView>
  )
}

