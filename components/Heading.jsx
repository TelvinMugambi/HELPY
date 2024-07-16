import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import COLORS from '../constants/color';
import { TouchableOpacity } from 'react-native';

export default function Heading({ text, isViewAll = false, onClick }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      {isViewAll && (
        <TouchableOpacity onPress={onClick}>
          <Text style={{ color: COLORS.PRIMARY }}>View All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
});
