import React, { useState } from 'react';
   import { View, Text, TextInput,StyleSheet,Image,ScrollView} from 'react-native';
   import { SafeAreaView } from 'react-native-safe-area-context';
   import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../Components/Profile/button';

   const ProfileScreen = () => {
     const [name, setName] = useState('Kartik');
     const [email, setEmail] = useState('Kartik@example.com');
     const [number, setNumber] = useState('9457884122');
     const [dateOfBirth, setDateOfBirth] = useState('Jaypee Institute');
     const [batch,setBatch] =useState('2025');
     const [isEditing, setIsEditing] = useState(false);
     const [pincode, setPincode] = useState('201309');

     const handleSave = () => {
       // Save the user's profile information (e.g., to a server or storage)
       // For simplicity, we'll just toggle the edit mode here
       setIsEditing(false);
     };
     

     return (
          <ScrollView> 
              <View>
                {isEditing ? (
           <Button title="Save" onPress={handleSave}/>
         ) : (
           <Button title="Edit Profile" onPress={()=> setIsEditing(true)} />
         )}
               <Image source={require('./kartik.jpg.jpeg')} 
            style={styles.userImage}/> 
</View>

   <Text style={tw`text-5`}>Welcome ,<Text style={tw`text-10`}>Kartik Saxena</Text></Text>   

   </View>
  )
}
