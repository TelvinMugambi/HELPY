import { StyleSheet, View, Text } from "react-native";
import React from "react";
export default function Profile(){
    return(
        <View style={style.container}>
            <Text>Profile</Text>
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