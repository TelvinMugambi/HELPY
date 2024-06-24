import { Image, Pressable, ScrollView } from "react-native";
import {Text, View } from "react-native";
import COLORS from "../constants/color";

export default function Security_and_tech() {
    return(
        <View
        style={{
            marginBottom:12,
            backgroundColor: COLORS.white,
            width: 344,
            height: 267
        }}
        >
            <View style={{
                width: 328,
                height: 267
            }}>

                <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    width: 312,
                    height: 35
                }}
                >
                    <Text>Security and Technology</Text>
                </View>

                <ScrollView horizontal style={{padding: 8, width: 328, height: 183}}>
                    {/* Image 1 */}
                    <Pressable onPress={()=>console.log("Security and Technology")}>
                        <View style={{width: 139, height: 183, borderColor: COLORS.primary, margin:12, flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Image source={require("../assets/security_and_technology/home_automation.jpeg")}
                                style={{
                                    height:159,
                                    width:139,
                                }}
                            />
                            <Text>Home Automation</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={()=>console.log("Security and Technology")}>
                        <View style={{width: 139, height: 183, borderColor: COLORS.primary, margin:12, flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Image source={require("../assets/security_and_technology/home_security_systems.jpeg")}
                                style={{
                                    height:159,
                                    width:139,
                                }}
                            />
                            <Text>Home Security Systems</Text>
                        </View>
                    </Pressable>

                    
                </ScrollView>
            </View>

            
            
        </View>
    )
}