import React ,{useState} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import Button from './button';
const Details = () => {
    const [name, setName] = useState('Kartik');
    const [email, setEmail] = useState('Kartik@example.com');
    const [number, setNumber] = useState('9457884122');
    const [dateOfBirth, setDateOfBirth] = useState('JIIT NOIDA');
    const [pincode, setPincode] = useState('201309');
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
      // Save the user's profile information (e.g., to a server or storage)
      // For simplicity, we'll just toggle the edit mode here 
      
      setIsEditing(false);
    };
    
    return (

    
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

         {isEditing ? (
           <Button title="Save" onPress={handleSave} />
         ) : (
           <Button title="Edit Profile" onPress={() => setIsEditing(true)} />
         )}
       </View>



    );
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
      },
      label: {
        fontSize: 20,
        fontWeight: 'light',
        marginTop: 8,
        color:'gray',
      },
      input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginTop: 8,
      },
      text: {
        fontSize: 30,
        marginTop: 8,
      },

})

export default Details;