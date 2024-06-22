import { Tabs } from "expo-router"

export default () =>{
    return(
        <Tabs>
            <Tabs.Screen name = "Home"/>
            <Tabs.Screen name = "Search"/>
            <Tabs.Screen name = "Profile"/>
        </Tabs>
    )
    
}