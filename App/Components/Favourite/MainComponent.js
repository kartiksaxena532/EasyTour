

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from './InitialScreen';
import TripPlanningScreen from './TripPlanningScreen';
import GeneralChatScreen from './GeneralChatScreen';

const Stack = createStackNavigator();

const MainComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="TripPlanning" component={TripPlanningScreen} />
        <Stack.Screen name="GeneralChat" component={GeneralChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainComponent;
