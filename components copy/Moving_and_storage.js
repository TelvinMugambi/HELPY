import { Image, Pressable, ScrollView } from "react-native";
import {Text, View } from "react-native";
import COLORS from "../constants/color";

export default function Moving_and_storage() {
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
                    <Text>Moving and Storage</Text>
                </View>

                <ScrollView horizontal style={{padding: 8, width: 328, height: 183}}>
                    {/* Image 1 */}
                    <Pressable onPress={()=>console.log("Moving and Storage")}>
                        <View style={{width: 139, height: 183, borderColor: COLORS.primary, margin:12, flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Image source={require("../assets/moving_and_storage/moving_services.jpeg")}
                                style={{
                                    height:159,
                                    width:139,
                                }}
                            />
                            <Text>Moving Services</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={()=>console.log("Moving and Storage")}>
                        <View style={{width: 139, height: 183, borderColor: COLORS.primary, margin:12, flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Image source={require("../assets/moving_and_storage/storage_solutions.jpeg")}
                                style={{
                                    height:159,
                                    width:139,
                                }}
                            />
                            <Text>Storage Solutions</Text>
                        </View>
                    </Pressable>

                    
                </ScrollView>
            </View>

            
            
        </View>
    )
}