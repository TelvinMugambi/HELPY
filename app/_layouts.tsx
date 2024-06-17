import { Stack } from "expo-router";

export default function RootLayout(){
    return(
        <Stack>
            <Stack.Screen name = "index"/>
            <Stack.Screen name="Signup"/>
            <Stack.Screen name="Login" />
            <Stack.Screen name="Resetpassword" />
            <Stack.Screen name="Changepassword" />
            <Stack.Screen name="Home" />
        </Stack>
    )
}