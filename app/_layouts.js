import { Stack } from "expo-router"

export default () =>{
    return(
        <Stack>
            <Stack.Screen name = "index" options={{headerShown: false}}/>
            <Stack.Screen name = "Authentication" options={{headerShown: false}}/>
            <Stack.Screen name="Application" options={{headerShown: false}}/>
        </Stack>
    )
}