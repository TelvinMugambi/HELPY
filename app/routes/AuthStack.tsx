import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screens/Signup';
import Login from '../screens/Login';

const Stack = createStackNavigator();


export default function AuthStack() {
  return (
    <>
  
      <Stack.Screen name = "Signup" component={Signup}/>
      <Stack.Screen name = "Login" component={Login}/>
    
  </>
        
    
  )
}