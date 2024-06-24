import { Tabs } from "expo-router"
import { Ionicons } from '@expo/vector-icons';
import { View,Text } from "react-native";

export default () => {
    return (
        
      
        <Tabs 
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle:{
                // position:'absolute',
                // bottom: 22,
                // left: 20,
                // right: 20,
                // elevation: 0, 
                backgroundColor: '#FFFFFF',
                borderRadius: 15,
                height: 60

            }
        }}
        >

        <Tabs.Screen name="Home" 
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
        <Tabs.Screen name="Categories" 
        options={{
            headerShown: false,
            tabBarIcon: ()=>(
                <View style={{alignItems: 'center', justifyContent:'center'}}>
                    <Ionicons name="apps-outline" size={24} color="black" />
                    <Text>Categories</Text>
                </View>
            )

        }} 
        />
        <Tabs.Screen name = "Booking" 
        options={{
            headerShown: false,
            tabBarIcon: ()=>(
                <View style={{alignItems: 'center', justifyContent:'center'}}>
                    <Ionicons name="calendar-number-outline" size={24} color="black" />
                    <Text>Bookings</Text>
                </View>
            )
        }} />
        <Tabs.Screen name = "Profile"  
        options={{
            headerShown: false,
            tabBarIcon: ()=>(
                <View style={{alignItems: 'center', justifyContent:'center'}}>
                    <Ionicons name="person-outline" size={24} color="black" />
                    <Text>Profile</Text>
                </View>
            )
        }} />
      </Tabs>
    )
}