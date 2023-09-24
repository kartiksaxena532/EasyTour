import { View, Text,Dimensions, StatusBar,ScrollView,Image,ImageBackground} from 'react-native'
import React from 'react'
import tw from 'twrnc';

import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../Shared/Colors';
import Details from '../Components/Profile/details'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
export default function Profiles() {
  return (
<View className="flex bg-amber-500">
   
    <LinearGradient
        colors={[Colors.WHITE, "transparent"]}
        style={{ padding: 20, width: Dimensions.get("screen").width }}
      ></LinearGradient>
        <ScrollView> 
              <View>
      
               <Image source={require('./kartik.jpg.jpeg')} 
            style={{height:150,width:150,marginTop:50,borderRadius:700,alignSelf:'center'}}/>
             <Image source={require('./kartik.jpg.jpeg')} 
            style={{height:200,width:200,marginTop:25,borderRadius:700,alignSelf:'center',position:'absolute',zIndex:-20 }}/>
            </View>

           
              
         
<Details/>

</ScrollView>
   </View>
  )
}
