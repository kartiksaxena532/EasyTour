import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TripPlanningScreen from './TripPlanningScreen';
import GeneralChatScreen from './GeneralChatScreen';

const ChatScreen = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const apiKey = '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';
  const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

  const sendMessageToChatbot = async () => {
    if (inputMessage.trim() === '') return;

    try {
      const response = await axios.post(
        apiUrl,
        {
          prompt: inputMessage,
          max_tokens: 50,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const botResponse = response.data.choices[0].text;
      setMessages([...messages, { text: inputMessage, user: true }, { text: botResponse, user: false }]);
      setInputMessage('');
    } catch (error) {
      console.error('Error sending message to chatbot:', error);
    }
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
