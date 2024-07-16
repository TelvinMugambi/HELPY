import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import COLORS from '../constants/color';
import { router } from 'expo-router';

export default function BusinessListItemSmall({ business }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        router.push('business-detail', {
          business: business,
        })
      }
    >
      <Image source={{ uri: business?.image_url }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={{ fontSize: 17 }}>{business?.name}</Text>
        <Text style={{ fontSize: 13, color: COLORS.GRAY }}>{business?.contactPerson}</Text>
        <Text
          style={{
            fontSize: 10,
            padding: 3,
            color: COLORS.PRIMARY,
            backgroundColor: COLORS.PRIMARY_LIGHT,
            borderRadius: 3,
            alignSelf: 'flex-start',
            paddingHorizontal: 7,
          }}
        >
          {business?.category_name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
  },
  infoContainer: {
    padding: 7,
    display: 'flex',
    gap: 3,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
});
