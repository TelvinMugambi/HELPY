import React, { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabase'
import { View,Text, SafeAreaView, ScrollView, StyleSheet, Pressable } from 'react-native'
import { Divider, Searchbar } from 'react-native-paper'
import COLORS from '../../constants/color'

export default function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() =>{
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
                        {categories.map((category, index)=>(
                            <Pressable onPress={() => console.log(category.category_name)}>
                                <View key={category.category_name}>
                                    <Text  style={styles.text}>{category.category_name}</Text>
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
        flex: 1,
        flexDirection: 'row', // This will create a row layout
    },
    leftContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        
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
})

