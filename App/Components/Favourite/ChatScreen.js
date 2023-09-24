import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TripPlanningScreen from './TripPlanningScreen';
import GeneralChatScreen from './GeneralChatScreen';

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
          <Text style={styles.option} onPress={startTripPlanning}>1. Plan My Trip</Text>
          <Text style={styles.option} onPress={startGeneralChat}>2. Suggest Me Places</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  botText: {
    fontSize: 18,
    marginBottom: 10,
  },
  option: {
    color: 'blue',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
});

export default ChatScreen;
