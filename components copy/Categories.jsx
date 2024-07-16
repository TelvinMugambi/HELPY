import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Heading from './Heading';
import COLORS from '../constants/color';
import { router } from 'expo-router';
import { truncateString } from '../utils/util-functions';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../api/api-categories';

export default function Categories() {
  const { data: categories, error: FetchCategoriesErr } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
  if (FetchCategoriesErr) {
    console.log('Error fetching categories:', FetchCategoriesErr);
  }

  console.log('categories:', categories);
  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={'Categories'} isViewAll={false} onClick={() => router.push('Categories')} />
      <FlatList
        data={categories}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
        horizontal
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() =>
              router.push({ pathname: `(categories)/${item?.category_id}`, params: item })
            }
          >
            <View style={styles.iconContainer}></View>
            <Text style={{ marginTop: 5 }}>{truncateString(item?.category_name, 8)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: COLORS.GRAY,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
});
