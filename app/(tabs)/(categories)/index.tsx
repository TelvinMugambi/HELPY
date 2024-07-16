import { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import COLORS from '../../../constants/color';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getCategories } from '../../../api/api-categories';
import { Category } from '../../../types/types';
import { Searchbar } from 'react-native-paper';
import { useRouter } from 'expo-router';
export default function Categories() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const { data: categories, error: CategoriesErr } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
  if (CategoriesErr) {
    console.error(CategoriesErr);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Searchbar
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={{ marginHorizontal: 12 }}
      />
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '12px 16px',
            margin: 12,
            gap: 16,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: '700' }}>Categories</Text>
          {categories
            ?.filter((c: Category) => c.category_name.includes(searchQuery))
            .map((c: Category) => (
              <TouchableOpacity
                key={c.category_id}
                onPress={() =>
                  router.push({ pathname: `/(categories)/${c.category_id}`, params: c })
                }
                style={{
                  padding: 16,
                  backgroundColor: COLORS.PRIMARY,
                  width: '100%',
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: '700' }}>
                  {c.category_name}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
