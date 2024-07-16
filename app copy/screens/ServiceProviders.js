import { View, Text, SafeAreaView, ScrollView, TextInput, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import COLORS from '../../constants/color';
import { Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Button from '../../components/Button';
import { supabase } from '../../utils/supabase';

export default function ServiceProviders() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getServiceProviders();
  }, []);

  async function getServiceProviders() {
    try {
      let { data: service_provider, error } = await supabase.from('service_provider').select('*');

      if (service_provider) {
        console.log('Success');
        setInfo(service_provider);

        console.log(service_provider[0]);
      } else {
        console.log('Error fetching data', error);
        setInfo(null);
      }
    } catch (error) {
      console.log('Error fetching data', error);
      setInfo(null);
    }
  }
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          padding: 12,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </Pressable>

        {info &&
          info.map((item, index) => (
            <Card style={{ margin: 20 }} key={index}>
              <Card.Content style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{item.service}</Text>
              </Card.Content>
              <Card.Content>
                <View style={{ marginBottom: 12 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      marginVertical: 8,
                    }}
                  >
                    Fullname
                  </Text>
                  <View
                    style={{
                      width: '100%',
                      height: 48,
                      borderColor: COLORS.black,
                      borderWidth: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingLeft: 22,
                    }}
                  >
                    <TextInput
                      placeholder={item.full_name}
                      placeholderTextColor={COLORS.black}
                      style={{
                        width: '100%',
                      }}
                    />
                  </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      marginVertical: 8,
                    }}
                  >
                    Phone
                  </Text>
                  <View
                    style={{
                      width: '100%',
                      height: 48,
                      borderColor: COLORS.black,
                      borderWidth: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingLeft: 22,
                    }}
                  >
                    <TextInput
                      placeholder={item.phone}
                      placeholderTextColor={COLORS.black}
                      style={{
                        width: '100%',
                      }}
                    />
                  </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      marginVertical: 8,
                    }}
                  >
                    Location
                  </Text>
                  <View
                    style={{
                      width: '100%',
                      height: 48,
                      borderColor: COLORS.black,
                      borderWidth: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingLeft: 22,
                    }}
                  >
                    <TextInput
                      placeholder={item.location}
                      placeholderTextColor={COLORS.black}
                      style={{
                        width: '100%',
                      }}
                    />
                  </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      marginVertical: 8,
                    }}
                  >
                    Service Description
                  </Text>
                  <View
                    style={{
                      width: '100%',
                      height: 48,
                      borderColor: COLORS.black,
                      borderWidth: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingLeft: 22,
                    }}
                  >
                    <TextInput
                      placeholder={item.description}
                      placeholderTextColor={COLORS.black}
                      style={{
                        width: '100%',
                      }}
                      multiline
                      numberOfLines={10}
                    />
                  </View>
                </View>

                <Button
                  title="Choose"
                  filled
                  style={{
                    marginTop: 18,
                    marginBottom: 4,
                  }}
                  onPress={() => console.log('Choose this service provider')}
                />
              </Card.Content>
            </Card>
          ))}
      </View>
    </ScrollView>
  );
}
