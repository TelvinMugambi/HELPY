import React, { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabase'
import { View,Text, SafeAreaView, ScrollView, StyleSheet, Pressable } from 'react-native'
import { Divider, Searchbar } from 'react-native-paper'
import COLORS from '../../constants/color'
import { router } from 'expo-router'


export default function Categories() {
    const [categories, setCategories] = useState([])
    const [category_ID, setCategory_ID] = useState([])
    const [subcategories, setSubcategories] = useState([])

    useEffect(() =>{
        getCategories(),
        getSubcategories()
    }, [])

    async function getCategories(){
        try {
            let { data: categories, error } = await supabase
            .from('categories')
            .select('*')

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

    async function getSubcategories(category_ID) {
        console.log('Fetching subcategories for category_ID:', category_ID);
        try {
          let { data: sub_category, error } = await supabase
            .from('sub_category')
            .select("*").eq("category_id", category_ID)
    
          if (sub_category) {
            setSubcategories(sub_category);
            setCategory_ID(category_ID);
            console.log('Fetching subcategories for category_ID:', category_ID);
          }
    
          if (error) {
            console.log('Could not fetch',error);
            setSubcategories([])
          }
        } catch (error) {
          console.log('Try catch failed:',error);
          setSubcategories([])
        }
    }
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <ScrollView>
                <View style = {{
                    height:72,
                    flex:1,
                    flexDirection:'column',
                    alignItems: 'flex-start',
                    padding: '12px 16px',
                    margin:12,
                    backgroundColor: COLORS.white 
                }}>
                    <Searchbar
                        placeholder='Search'
                    />
                </View>
                <View style = {styles.container}>
                    <View style={styles.leftContainer}>
                    {/* Displays all the categories */}
                        {categories.map((category, index)=>{
                            console.log("category is",category)
                            return (
                            <Pressable onPress={() => getSubcategories(category.category_id)} key={category.category_name}>
                                <View  style = {{
                                    width: "100%",
                                    height: 48,
                                    borderColor: COLORS.black,
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding:12
                                }}>
                                    <Text  style={styles.text}>{category.category_name}</Text>
                                    <Divider style={{backgroundColor:COLORS.black}}/>
                                </View>
                            </Pressable>
                            
                        )})}
            
                    </View>
                    <View style={styles.rightContainer}>
                        {subcategories.map((subcategory, index) =>(
                            <Pressable onPress={()=> router.push("../screens/BookingDetails")}key = {subcategory.sub_category_name}>
                                 <View  style={{
                                
                            }}>
                                <Text style={styles.text}>{subcategory.sub_category_name}</Text>
                                <Divider style={{backgroundColor:COLORS.black}}/>
                            </View>
                            </Pressable>
                           
                        ))}
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
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
})

