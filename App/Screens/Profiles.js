import React, { useState } from 'react';
   import { View, Text, TextInput,StyleSheet,Image,ScrollView} from 'react-native';
   import { SafeAreaView } from 'react-native-safe-area-context';
   import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../Components/Profile/button';

<<<<<<< HEAD
   const ProfileScreen = () => {
     const [name, setName] = useState('Kartik');
     const [email, setEmail] = useState('Kartik@example.com');
     const [number, setNumber] = useState('9457884122');
     const [dateOfBirth, setDateOfBirth] = useState('Jaypee Institute');
     const [batch,setBatch] =useState('2025');
     const [isEditing, setIsEditing] = useState(false);
     const [pincode, setPincode] = useState('201309');
=======
   <Text style={tw`text-5`}>Welcome ,<Text style={tw`text-10`}>Lakshya</Text></Text>   
>>>>>>> 6f6f14bb347a821c28f1ffc4a25ae91b7716a033

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

       <View style={styles.container}>
         <Text style={styles.label}>Name:</Text>
         {isEditing ? (
           <TextInput
             style={styles.input}
             value={name}
             onChangeText={text => setName(text)}
           />
         ) : (
           <Text style={styles.text}>{name}</Text>
         )}

         <Text style={styles.label}>Email:</Text>
         {isEditing ? (
           <TextInput
             style={styles.input}
             value={email}
             onChangeText={text => setEmail(text)}
           />
         ) : (
           <Text style={styles.text}>{email}</Text>
         )}
           <Text style={styles.label}>Phone:</Text>
         {isEditing ? (
          <TextInput
          style={styles.input}
          onChangeText={text=>setNumber(text)}
          value={number}
          keyboardType="numeric"
        />
         ) : (
           <Text style={styles.text}>{number}</Text>
         )}

          <Text style={styles.label}>Address:</Text>
         {isEditing ? (
          <TextInput
          style={styles.input}
          onChangeText={text=>setDateOfBirth(text)}
          value={dateOfBirth}
         
        />

         ) : (
           <Text style={styles.text}>{dateOfBirth}</Text>
         )}

<Text style={styles.label}>Pincode:</Text>
         {isEditing ? (
          <TextInput
          style={styles.input}
          onChangeText={text=>setPincode(text)}
          value={pincode}
          keyboardType="numeric"
        />
         ) : (
           <Text style={styles.text}>{pincode}</Text>
         )}
 <Text style={styles.label}>Batch:</Text>
         {isEditing ? (
           <TextInput
             style={styles.input}
             value={batch}
             onChangeText={text => setBatch(text)}
           />
         ) : (
           <Text style={styles.text}>{batch}</Text>
         )}

         
       </View>
       </ScrollView>
      
     );
   };

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       padding: 20,
     },
     label: {
       fontSize: 16,
       fontWeight: 'light',
       marginTop: 10,
       color:'gray',
     },
     input: {
       fontSize: 16,
       borderWidth: 1,
       borderColor: '#ccc',
       padding: 12,
       marginTop: 5,
       marginBottom:10
     },
     text: {
       fontSize: 30,
       marginTop: 10,
     },
     userImage:{
      width:150,
      height:150,
      borderRadius:200,
      alignSelf: 'center', 
      marginTop: 20,
    },

   });

   export default ProfileScreen;
   