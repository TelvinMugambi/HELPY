import { Stack } from "expo-router"

export default () =>{
    return(
        <Stack>
            <Stack.Screen name = "index" options={{headerShown: false}}/>
            <Stack.Screen name = "Welcome" options={{ headerShown: false }}/>
            <Stack.Screen name = "Signup" options={{ headerShown: false }}/>
            <Stack.Screen name = "Login" options={{ headerShown: false }}/>
            <Stack.Screen name = "(tabs)" options={{ headerShown: false }}/>

        </Stack>
    )
}