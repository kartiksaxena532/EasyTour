/*import { View, Text,Dimensions, StatusBar} from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../Shared/Colors';
export default function Profiles() {
  return (
<View className="flex bg-amber-500">
  
    <View style={{paddingTop:30,paddingLeft:20}}>
    <Text style={{fontSize:30, color:'orange'}}>Profile</Text>
    </View>

   <Text style={tw`text-5`}>Welcome ,<Text style={tw`text-10`}>User</Text></Text>  
   function App(){
    return (
      <div>
        <login/>
      </div>
    );
   } 
  </View>
  );
}*/
import React from 'react';
import { View, Text } from 'react-native'; // Import from 'react-native'
import tw from 'tailwind-rn'; // Assuming you are using 'tailwind-rn' for styling
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../Shared/Colors';

export default function Profiles() {
  return (
    <View style={tw`flex bg-amber-500`}>
      <View style={tw`pt-12 pl-4`}>
        <Text style={{ fontSize: 30, color: 'orange' }}>Profile</Text>
      </View>

      <Text style={tw`text-5`}>Welcome,</Text>
      <Text style={tw`text-10`}>User</Text>

      {/* Removed the 'function App' section; it seems unrelated to this component */}
    </View>
  );
}
