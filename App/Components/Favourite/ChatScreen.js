import React, { useState } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import TripPlanningScreen from './TripPlanningScreen';
import GeneralChatScreen from './GeneralChatScreen';
import Button from '../Favourite/button2';

const ChatScreen = () => {
  const [chatMode, setChatMode] = useState(null); 


  const startTripPlanning = () => {
    setChatMode('tripPlanning');
  };


  const startGeneralChat = () => {
    setChatMode('generalChat');
  };

  return (
    <View style={styles.container}>
     
      {chatMode === 'tripPlanning' ? (
        <TripPlanningScreen />
      ) : chatMode === 'generalChat' ? (
        <GeneralChatScreen />
      ) : (
       
        <View style={styles.botContainer}>
          <Image source={require('./../../../assets/disha.jpg')} style={styles.botImage} />
          <Text style={styles.botIntroText}>Hi, I'm Disha!</Text>
          <Text style={styles.botText}>How can I assist you today?</Text>
          <Text style={styles.botText}>Choose an option:</Text>
          <Button style={styles.option} onPress={startTripPlanning} title=" Plan My Trip "/>
          <Button style={styles.option} onPress={startGeneralChat} title=" Suggest Me Places "/>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  botContainer: {
    alignItems: 'center',
  },
  botImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  botIntroText: {
    fontSize: 35,
    fontWeight: 'Bold',
    marginBottom: 10,
  },
  botText: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight:'semibold',
    color:'gray'

  },
  option: {
    color: 'blue',
    fontSize: 16,
    marginBottom: 10,
    paddingTop:10,
    paddingHorizontal:10,
  },
});

export default ChatScreen;
