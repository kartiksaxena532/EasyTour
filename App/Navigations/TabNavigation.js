import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Fav from '../Screens/Fav';
import Search from '../Screens/Search';
import Profiles from '../Screens/Profiles';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';
export default function TabNavigation() {
    const Tab=createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home" component={HomeNavigation} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Search" component={Search}
       options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Fav" component={Fav}
       options={{
        tabBarLabel: 'Plan',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="map" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Profile" component={Profiles} 
       options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          
          <FontAwesome name="user-circle-o" color={color} size={size} />
        ),
      }}/>
    </Tab.Navigator>
  )
}