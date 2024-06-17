import { Tabs } from "expo-router"
import React from "react"

export default () =>{
    <Tabs>
        <Tabs.Screen name="Home"/>
        <Tabs.Screen name="Search"/>
        <Tabs.Screen name="Booking"/>
        <Tabs.Screen name="Profile"/>
    </Tabs>
}