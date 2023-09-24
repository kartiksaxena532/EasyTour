import { View, Text,Dimensions, StatusBar} from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../Shared/Colors';
export default function Profiles() {
  return (
<View className="flex bg-amber-500">
   
    <LinearGradient
        colors={[Colors.WHITE, "transparent"]}
        style={{ padding: 20, width: Dimensions.get("screen").width }}
      ><Text>hello</Text>
        </LinearGradient>
    <View style={{paddingTop:30,paddingLeft:20}}>
    <Text style={{fontSize:30, color:'orange'}}>Profile</Text>
    </View>

   <Text style={tw`text-5`}>Welcome ,<Text style={tw`text-10`}>Lakshya</Text></Text>   

   </View>
  )
}
