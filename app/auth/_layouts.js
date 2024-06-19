import { Stack } from "expo-router";

export default function auth_layout(){
    return(
    <Stack>
            <Stack.Screen name = "Welcome"/>
            <Stack.Screen name="Signup"/>
            <Stack.Screen name="Login" />
            <Stack.Screen name="Resetpassword" />
            <Stack.Screen name="Changepassword" />
    </Stack>
    )
}