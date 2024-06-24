import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import COLORS from '../../constants/color';
import { Searchbar } from 'react-native-paper';



export default function Categories() {
    const [searchQuery, setsearchQuery] = React.useState('')

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }} >
            <View style={{padding: 8}}>
                <Searchbar
                placeholder="Search"
                onChangeText={setsearchQuery}
                value={searchQuery}
                />
            </View>
            
        </SafeAreaView>
    )
}