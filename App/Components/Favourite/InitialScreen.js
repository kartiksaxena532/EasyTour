import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const InitialScreen = ({ onStartPlanning, onSuggestPlaces }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://cdn.jsdelivr.net/gh/corover/assets@latest/askdisha-bucket/disha.svg' }} style={styles.botImage} />

      <Text style={styles.botText}>Welcome to Disha👩‍💻</Text>
      <Text style={styles.descriptionText}>Your Personal Trip Assistant</Text>

      <TouchableOpacity onPress={onStartPlanning} style={styles.button}>
        <Text style={styles.buttonText}>Plan My Trip</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSuggestPlaces} style={styles.button}>
        <Text style={styles.buttonText}>Suggest Me Places</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
  },
  botImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  botText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'blue', 
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 30,
    color: 'gray', 
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 30,
    width: 200,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InitialScreen;
