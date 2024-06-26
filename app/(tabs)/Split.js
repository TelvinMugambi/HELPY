import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { supabase } from '../../utils/supabase';

const Split = () => {
    const no = [1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77]
    const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
    const numberofTime = no.length;
    const componentsArray = Array.from({ length: numberofTime });

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories()
    }, [])

    async function getCategories(){

        try {
            let { data: categories, error } = await supabase
            .from('categories')
            .select('category_name')

            if (categories){
                setCategories(categories)
                console.log(categories)
            }
            if(error){
                console.log(error)
            }
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
      {categories.map((category, index) => (
                <View key={category.category_name}>
                     <Text  style={styles.text}>{category.category_name}</Text>
                </View>
               
            ))}
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text}>Right Side Content</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // This will create a row layout
  },
  leftContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Split;
