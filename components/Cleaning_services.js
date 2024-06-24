import { Image, Pressable, ScrollView } from "react-native";
import {Text, View } from "react-native";
import COLORS from "../constants/color";

export default function Cleaning_services(){
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
                    <Text>Cleaning Services</Text>
                </View>

                <ScrollView style={{padding: 8, width: 328, height: 183}}>
                    {/* Image 1 */}
                    <Pressable onPress={()=>console.log("Pressed")}>
                        <View style={{width: 139, height: 183, borderColor: COLORS.primary}}>
                            <Image source={require("../assets/cleaning_services/residential_cleaning.jpeg")}
                                style={{
                                    height:159,
                                    width:139,
                                }}
                            />
                            <Text>Resedential Cleaning</Text>
                        </View>
                    </Pressable>
                </ScrollView>
            </View>

            
            
        </View>
    )
}