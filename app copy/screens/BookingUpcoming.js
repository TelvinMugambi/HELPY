import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../constants/color';
import Button from '../../components/Button';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../api/api-bookings';
import { getCategories } from '../../api/api-categories';
import { useRouter } from 'expo-router';

export default function BookingUpcoming() {
  const [hasUpcomingTask, setHasUpcomingTask] = useState(false);
  const [number, setNumber] = useState(0);
  const router = useRouter();
  const { data: categories, error: FetchingCategoriesErr } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
  if (FetchingCategoriesErr) {
    console.log(FetchingCategoriesErr);
  }
  const { data: bookings, error: FetchingBookingsErr } = useQuery({
    queryKey: ['bookings'],
    queryFn: getBookings,
  });
  if (FetchingBookingsErr) {
    console.log(FetchingBookingsErr);
  }

  const handleButtonClick = () => {
    //Implement backend to check
    setHasUpcomingTask(true);
    setNumber(number + 1);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
      }}
    >
      <View style={{ width: '100%' }}>
        {bookings?.length > 0 ? (
          <View style={{ width: '100%' }}>
            <ScrollView style={{ marginTop: 16, gap: 16, width: '100%' }}>
              {bookings.map((booking) => (
                <TouchableOpacity
                  onPress={() => router.push({ pathname: `(bookings)`, params: booking })}
                  key={booking.id}
                  style={{
                    width: '100%',
                    padding: 16,
                    marginBottom: 16,
                    borderRadius: 16,
                    backgroundColor: COLORS.PRIMARY,
                    gap: 6,
                  }}
                >
                  <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: '700' }}>
                    {categories.find((c) => c.category_id === booking.service_id).category_name}
                  </Text>
                  <Text style={{ color: 'white' }}>{`${booking.description.slice(0, 40)}...`}</Text>
                  <Text
                    style={{
                      color: 'white',
                      padding: 6,
                      textTransform: 'capitalize',
                      borderRadius: 16,
                      fontWeight: '700',
                      backgroundColor: `${booking.status === 'pending' ? 'orange' : booking.status === 'accepted' ? 'green' : 'red'}`,
                      alignSelf: 'flex-start',
                    }}
                  >
                    {booking.status}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ) : (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name="clipboard-outline" size={100} style={{ color: COLORS.secondary }} />
            <Text>No Upcoming Services.</Text>
            <Text>Currently you do not have any upcoming Services.</Text>
            <Text>Place and Track your services from here.</Text>
            <Button
              title="View all services"
              filled
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
              onPress={() => console.log('Move to categories')}
            />
          </View>
        )}
      </View>
    </View>
  );
}
