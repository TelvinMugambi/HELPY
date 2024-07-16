import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import { Button, Divider, Searchbar } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import COLORS from '../../../constants/color';
import { router, useLocalSearchParams } from 'expo-router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addBooking } from '../../../api/api-bookings';
import * as Location from 'expo-location';

export default function Categories() {
  const category = useLocalSearchParams();
  const [date, setDate] = useState('');
  const [location, setLocation] = useState(null);
  const queryClient = useQueryClient();
  const [description, setDescription] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const { mutate } = useMutation({
    mutationFn: addBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
      Alert.alert('Booking successful');
      router.push('(bookings)');
    },
    onError: () => {
      Alert.alert('Booking failed');
    },
  });
  async function handleBooking() {
    const newBooking = {
      user_id: '14923981-2ce3-4bee-b482-a14afa627e03',
      service_id: parseInt(category.category_id),
      description,
      datetime: date,
      status: 'pending',
      location: JSON.stringify({
        cord: { lat: location.coords.latitude, long: location.coords.longitude },
      }),
    };
    mutate(newBooking);
  }
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '12px 16px',
            margin: 12,
            backgroundColor: COLORS.white,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: '700' }}>{category.category_name}</Text>
          <View style={{ justifyContent: 'center', gap: 16, alignItems: 'center', width: '100%' }}>
            <TextInput
              placeholder="Description"
              multiline
              style={{
                width: '100%',
                marginTop: 12,
                paddingHorizontal: 12,
                borderWidth: 1,
                borderColor: COLORS.grey,
                borderRadius: 8,
                paddingVertical: 8,
              }}
              value={description}
              onChangeText={setDescription}
            />
            <Text style={{ fontSize: 24, fontWeight: '700' }}>Select Date</Text>
            <Text style={{ fontSize: 24, fontWeight: '700' }}>{date}</Text>
            <Calendar
              minDate={new Date().toDateString()}
              style={{ borderWidth: 1, marginTop: 24 }}
              onDayPress={(date) => {
                const dater = new Date(date.dateString);
                console.log(dater);
                setDate(dater.toDateString());
              }}
            />
            <Button onPress={handleBooking} mode="contained" style={{ width: '80%' }}>
              Book Now
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // This will create a row layout
  },
  leftContainer: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
  },
  rightContainer: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
  },
  text: {
    fontSize: 13,
    fontWeight: 'medium',
  },
});
