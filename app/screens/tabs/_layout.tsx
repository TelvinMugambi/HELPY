import { Tabs } from "expo-router"
import React from "react"

export default () =>{
    return(
        <Tabs>
            <Tabs.Screen name="Home"/>
            <Tabs.Screen name="Search"/>
            <Tabs.Screen name="Booking"/>
            <Tabs.Screen name="Profile"/>
            <Tabs.Screen name = "Account"/>
        </Tabs>
    )
        
}