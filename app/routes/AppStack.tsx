import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator()

export default function AppStack() {
  return (

        <Tab.Screen name = "Home" component={Home}/>
  
  )
}