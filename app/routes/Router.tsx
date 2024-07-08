import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
//Stack nav
import {createStackNavigator} from '@react-navigation/stack';
// Tab nav
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../context/Auth';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

export default function Router() {
    const {user} = useAuth()
  return (
    <NavigationContainer>
        {user ? 
          <AppStack/>:
          
          <AuthStack/>
        }
    </NavigationContainer>
  )
}