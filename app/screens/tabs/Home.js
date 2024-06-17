import { StyleSheet, View, Text } from "react-native";
import React from "react";
export default function Home(){
    return(
        <View style={style.container}>
            <Text>Home</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 24
    }
})