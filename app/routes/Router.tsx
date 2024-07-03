import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { useAuth } from '../context/Auth';
import AppStack from './AppStack';
import AuthStack from './AuthStack';


export default function Router() {
    const {user} = useAuth()
  return (
    <NavigationContainer>
        {user ? <AppStack/>:<AuthStack/>}
    </NavigationContainer>
  )
}