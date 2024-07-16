import { View, Text, SafeAreaView, ScrollView, Pressable, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabase';
import COLORS from '../../constants/color'
import Button from '../../components/Button';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Calendar } from 'react-native-calendars';
import { Session } from '@supabase/supabase-js'


export default function BookingDetails() {

  const [date, setDate] = useState('')
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')

  async function updateBookingDetails(){
    try {
      
      const { data, error } = await supabase
      .from('bookings')
      .upsert([
        {id: '16'},
        { fullname: fullname },
        { email: email },
        { phone: phone },
        { location: location },
        { service_description: description },
      ])
      .select()
      if(data){
        console.log(data)
      
      }

      
      if (error) {
        throw error
      }

    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }
  
  
  
  return (
    <SafeAreaView style={{flex:1, borderWidth:1, backgroundColor: COLORS.grey, padding:30, elevation:1,borderColor: COLORS.black}}>
      <ScrollView>
        <View style={{
            flex:1,
            flexDirection: 'row',
            alignContent: 'center',
            backgroundColor: COLORS.white,
            borderWidth:0.5
          }}>
            <Pressable onPress={() => router.back()}>
              <Feather name="x-circle" size={30} color="black" />
            </Pressable>
            <View style = {{
              flex:1,
              width: "100%",
              justifyContent: 'center',
              alignItems: 'center'

            }}>
              
              <Text>FILL OUT THE FORM BELOW</Text>
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
            }}>Fullname</Text>
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
              
                placeholder='Display Fullname'
                placeholderTextColor={COLORS.black}
                onChangeText={(fullname)=> setFullname(fullname)}
                value={fullname}
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
                onChangeText={(email)=> setEmail(email)}
                value={email}
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
                onChangeText={(phone)=> setPhone(phone)}
                value={phone}
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
                onChangeText={(location)=> setLocation(location)}
                value={location}
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
            }}>Choose a preffered date</Text>
            <Calendar
              style={{
                borderWidth:1
              }} 
              onDayPress={(date)=> setDate(date)}
            />
            <Text style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8
            }}>Selected day: {date.dateString}</Text>
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
                onChangeText={(description)=> setDescription(description)}
                value={description}
                style={{
                   width: "100%"
                }}
                multiline = {true}
                numberOfLines = {4}
              />
            </View>
          </View>
            
        </View>

        <View style = {{
          flex: 1,
          backgroundColor: COLORS.white,
          padding:12
        }}>
          <Button
            title="Choose service provider"
            filled
            style={{
                marginTop: 18,
                marginBottom: 4,
            }}
            onPress={() => updateBookingDetails()}
            
        />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}