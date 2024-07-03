import { View, Text, Image, Pressable,Alert, TextInput, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, AppState } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../components/Button';
import COLORS from '../constants/color';
import { Ionicons } from "@expo/vector-icons";
import { AuthProvider } from './context/Auth';
import Router from './routes/Router';

export default function index() {
  
   return(
    <AuthProvider>
      <Router/>
    </AuthProvider>
   )
}