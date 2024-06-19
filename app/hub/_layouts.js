import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from "react-native";

export default function app_layout(){
    <Tabs>
        <Tab.Screen name="Home"
            options={{
                headerShown: false,
                tabBarIcon: ()=>(
                    <View style={{alignItems: 'center', justifyContent:'center'}}>
                        <Ionicons name="home-outline" size={24} color="black" />
                        <Text>Home</Text>
                    </View>
            )

        }} 
        />

        <Tab.Screen name="Search"
            options={{
                headerShown: false,
                tabBarIcon: ()=>(
                    <View style={{alignItems: 'center', justifyContent:'center'}}>
                        <Ionicons name="home-outline" size={24} color="black" />
                        <Text>Search</Text>
                    </View>
            )

        }} 
        />

        <Tab.Screen name="Booking"
            options={{
                headerShown: false,
                tabBarIcon: ()=>(
                    <View style={{alignItems: 'center', justifyContent:'center'}}>
                        <Ionicons name="home-outline" size={24} color="black" />
                        <Text>Booking</Text>
                    </View>
            )

        }} 
        />

        <Tab.Screen name="Profile"
            options={{
                headerShown: false,
                tabBarIcon: ()=>(
                    <View style={{alignItems: 'center', justifyContent:'center'}}>
                        <Ionicons name="home-outline" size={24} color="black" />
                        <Text>Profile</Text>
                    </View>
            )

        }} 
        />
    </Tabs>
}