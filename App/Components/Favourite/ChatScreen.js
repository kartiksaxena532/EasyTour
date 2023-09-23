// ChatScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

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
    <View>
      <View>
        {messages.map((message, index) => (
          <Text key={index} style={{ textAlign: message.user ? 'right' : 'left' }}>
            {message.text}
          </Text>
        ))}
      </View>
      <TextInput
        placeholder="Type your message..."
        value={inputMessage}
        onChangeText={(text) => setInputMessage(text)}
      />
      <Button title="Send" onPress={sendMessageToChatbot} />
    </View>
  );
};

export default ChatScreen;
