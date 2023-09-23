import React, { useState } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity, Button, Modal } from 'react-native';

const ProfileScreen = () => {
  const [foodieModalVisible, setFoodieModalVisible] = useState(false);
  const [travelerModalVisible, setTravelerModalVisible] = useState(false);

  const toggleFoodieModal = () => {
    setFoodieModalVisible(!foodieModalVisible);
  };

  const toggleTravelerModal = () => {
    setTravelerModalVisible(!travelerModalVisible);
  };

  return (
    <View style={styles.container}>
      {/* <Image
        source={{ uri: 'https://example.com/your-profile-image.jpg' }} // Replace with the URL of your profile image
        style={styles.profileImage}
      /> */}
      <Text style={styles.profileName}>Dhruv Gupta</Text>
      <Text style={styles.profilePhone}>+91-XXXXXXXXXX</Text>
      <Text style={styles.profileEmail}>DhruvGupta@gmail.com</Text>
      

      {/* <Button style={styles.profileButton} title="Foodie ?" onPress={toggleFoodieModal} />
      <Button style={styles.profileButton} title="Traveler ?" onPress={toggleTravelerModal} />
       */}

<View style={styles.buttonRow}>
<TouchableOpacity
        style={styles.button}
        onPress={toggleFoodieModal}
      >
        <Text style={styles.buttonText}>I'm a Foodie</Text>
      </TouchableOpacity>

      {/* Traveler Button */}
      <TouchableOpacity
        style={[styles.button, styles.travelerButton]}
        onPress={toggleTravelerModal}
      >
        <Text style={[styles.buttonText, styles.travelerButtonText]}>Traveler</Text>
      </TouchableOpacity>
      </View>

      {/* Foodie Modal */}
      <Modal
        visible={foodieModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleFoodieModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Hmmm, you are a Foodie 😋</Text>
            <Button title="Close" onPress={toggleFoodieModal} />
          </View>
        </View>
      </Modal>

      {/* Traveler Modal */}
      <Modal
    
        visible={travelerModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleTravelerModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Glad to meet you Dora 😊</Text>
            <Button title="Close" onPress={toggleTravelerModal} />
          </View>
        </View>
      </Modal>
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileButton:{
    fontSize: 20,
    padding:20,
    margin: 20,
    backgroundColor: "red",
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    margin:20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  profilePhone:{
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  profileEmail: {
    fontSize: 18,
    color: '#666',
    margin: 10,
    fontWeight:'bold',
    marginBottom: 15,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    margin:10,
    borderRadius: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProfileScreen;
