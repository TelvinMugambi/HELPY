import { Image, Pressable, ScrollView } from "react-native";
import {Text, View } from "react-native";
import COLORS from "../constants/color";

export default function Landscaping() {
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
                    <Text>Landscaping</Text>
                </View>

                <ScrollView horizontal style={{padding: 8, width: 328, height: 183}}>
                    {/* Image 1 */}
                    <Pressable onPress={()=>console.log("Landscaping")}>
                        <View style={{width: 139, height: 183, borderColor: COLORS.primary, margin:12, flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Image source={require("../assets/landscaping _and_outdoor_services/Garden_Maintenance.jpeg")}
                                style={{
                                    height:159,
                                    width:139,
                                }}
                            />
                            <Text>Garden Maintenance</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={()=>console.log("Landscaping")}>
                        <View style={{width: 139, height: 183, borderColor: COLORS.primary, margin:12, flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Image source={require("../assets/landscaping _and_outdoor_services/Hardscaping.jpeg")}
                                style={{
                                    height:159,
                                    width:139,
                                }}
                            />
                            <Text>Hardscaping</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={()=>console.log("Landscaping")}>
                        <View style={{width: 139, height: 183, borderColor: COLORS.primary, margin:12, flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Image source={require("../assets/landscaping _and_outdoor_services/Lawn_care.jpeg")}
                                style={{
                                    height:159,
                                    width:139,
                                }}
                            />
                            <Text>Lawn Care</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={()=>console.log("Landscaping")}>
                        <View style={{width: 139, height: 183, borderColor: COLORS.primary, margin:12, flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Image source={require("../assets/landscaping _and_outdoor_services/Tree Services.jpeg")}
                                style={{
                                    height:159,
                                    width:139,
                                }}
                            />
                            <Text>Tree services</Text>
                        </View>
                    </Pressable>

                </ScrollView>
            </View>

            
            
        </View>
    )
}