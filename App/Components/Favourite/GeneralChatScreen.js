import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';

const GeneralChatScreen = ({ history }) => {
  const [messages, setMessages] = useState([]);
  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    const botResponse = { text: 'Disha👩‍💻: Hello! How can I assist you with your trip?' };
    setMessages([...messages, botResponse]);
  }, []);

  const handleSend = async () => {
    if (textInput.trim() === '') return;

    const userMessage = { text: textInput, user: true };
    setMessages([...messages, userMessage]);

    // committing without api key
    // model chosen test-davinci-001
    try {
      const apiKey = 'sk-RGMxpZqk7n36Su0Dsh2LT3BlbkFJ8b9amlodfhTnLAKSHYALKHiNFci'; // Replace with your OpenAI API key
      const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-001/completions';

      const response = await axios.post(
        apiUrl,
        {
          prompt: textInput,
          max_tokens: 50,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      const botResponse = { text: `Disha👩‍💻: ${response.data.choices[0].text}` };
      setMessages([...messages, botResponse]);
    } catch (error) {
      console.error('Error sending message to OpenAI:', error);
    }

    setTextInput('');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={item.user ? styles.userMessage : styles.botMessage}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={(text) => setTextInput(text)}
          placeholder="Type your message..."
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={history} style={styles.backButton}>
        <Text style={styles.buttonText}>Back to Start</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end', // Move the chat to the bottom
  },
  userMessage: {
    backgroundColor: 'lightblue',
    alignSelf: 'flex-end',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  botMessage: {
    backgroundColor: 'lightgreen',
    alignSelf: 'flex-start',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#CCC',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center', // Center the button vertically
    alignItems: 'center', // Center the button horizontally
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
  },
  backButton: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
    alignSelf: 'center', // Center the button horizontally
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default GeneralChatScreen;
