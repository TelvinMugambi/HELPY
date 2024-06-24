import { Image, Pressable, ScrollView } from "react-native";
import {Text, View } from "react-native";
import COLORS from "../constants/color";

export default function Renovation() {
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
                    <Text>Renovation</Text>
                </View>

                <ScrollView horizontal style={{padding: 8, width: 328, height: 183}}>
                    {/* Image 1 */}
                    <Pressable onPress={()=>console.log("Renovation")}>
                        <View style={{width: 139, height: 183, borderColor: COLORS.primary, margin:12, flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Image source={require("../assets/renovation_and_remodeling/bathroom_remodeling.jpeg")}
                                style={{
                                    height:159,
                                    width:139,
                                }}
                            />
                            <Text>Bathroom Remodelling</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={()=>console.log("Renovation")}>
                        <View style={{width: 139, height: 183, borderColor: COLORS.primary, margin:12, flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Image source={require("../assets/renovation_and_remodeling/Kitchen_remodeling.jpeg")}
                                style={{
                                    height:159,
                                    width:139,
                                }}
                            />
                            <Text>KItchen Remodelling</Text>
                        </View>
                    </Pressable>

                    
                </ScrollView>
            </View>

            
            
        </View>
    )
}