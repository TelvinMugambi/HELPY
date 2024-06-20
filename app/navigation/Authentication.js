import { Stack } from "expo-router"
import Welcome from "../screens/Welcome"

export default () =>{
    return(
        <Stack>
            <Stack.Screen name = "../screens/Welcome" options={{ headerShown: false }}/>
            <Stack.Screen name = "../seccrensSignup" options={{ headerShown: false }}/>
            <Stack.Screen name = "../screens/Login" options={{ headerShown: false }}/>
        </Stack>
    )
    
}