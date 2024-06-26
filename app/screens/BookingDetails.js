import { View, Text, SafeAreaView, ScrollView, Pressable, TextInput } from 'react-native'
import React from 'react'
import COLORS from '../../constants/color'
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function BookingDetails() {
  return (
    <SafeAreaView style={{flex:1, borderRadius:8, backgroundColor: COLORS.grey, padding:30, elevation:1, borderCurve: 'circular', borderColor: COLORS.black}}>
      <ScrollView>
        <View style={{
            flex:1,
            flexDirection: 'row',
            alignContent: 'center',
            backgroundColor: COLORS.light_green,
          }}>
            <Pressable onPress={() => router.back()}>
              <Feather name="x-circle" size={24} color="black" />
            </Pressable>
            <View style = {{
              flex:1,
              width: "100%",
              justifyContent: 'center',
              alignItems: 'center'

            }}>
              
              <Text>BOOKING FORM</Text>
            </View>
        </View>

        <View style={{
          flex:1,
          backgroundColor: COLORS.white,
          padding:12
        }}>
          <View style={{marginBottom:12}}>
            <Text style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8
            }}>Username</Text>
            <View style= {{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,      
              borderWidth: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
            }}>
              <TextInput
                placeholder='Display Username'
                placeholderTextColor={COLORS.black}
                style={{
                   width: "100%"
                }}
              />
            </View>
          </View>
            
        </View>

        <View style={{
          flex:1,
          backgroundColor: COLORS.white,
          padding:12
        }}>
          <View style={{marginBottom:12}}>
            <Text style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8
            }}>Email Address</Text>
            <View style= {{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,      
              borderWidth: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
            }}>
              <TextInput
                placeholder='Display email address'
                placeholderTextColor={COLORS.black}
                style={{
                   width: "100%"
                }}
              />
            </View>
          </View>
            
        </View>

        <View style={{
          flex:1,
          backgroundColor: COLORS.white,
          padding:12
        }}>
          <View style={{marginBottom:12}}>
            <Text style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8
            }}>Phone Number</Text>
            <View style= {{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,      
              borderWidth: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
            }}>
              <TextInput
                placeholder='Display Phone Number'
                placeholderTextColor={COLORS.black}
                style={{
                   width: "100%"
                }}
              />
            </View>
          </View>
            
        </View>

        <View style={{
          flex:1,
          backgroundColor: COLORS.white,
          padding:12
        }}>
          <View style={{marginBottom:12}}>
            <Text style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8
            }}>Location</Text>
            <View style= {{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,      
              borderWidth: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
            }}>
              <TextInput
                placeholder='Display Location'
                placeholderTextColor={COLORS.black}
                style={{
                   width: "100%"
                }}
              />
            </View>
          </View>
            
        </View>

        <View style={{
          flex:1,
          backgroundColor: COLORS.white,
          padding:12
        }}>
          <View style={{marginBottom:12}}>
            <Text style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8
            }}>Service Description</Text>
            <View style= {{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,      
              borderWidth: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
            }}>
              <TextInput
                placeholder='Give us more details of the your desiresd task......'
                placeholderTextColor={COLORS.black}
                style={{
                   width: "100%"
                }}
                multiline = {true}
                numberOfLines = {4}
              />
            </View>
          </View>
            
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}