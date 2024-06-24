import { Image, Pressable, ScrollView } from "react-native";
import {Text, View } from "react-native";
import COLORS from "../constants/color";
const Interior_design = () => {
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
                    <Text>Interior Design</Text>
                </View>

                <ScrollView horizontal style={{padding: 8, width: 328, height: 183}}>
                    {/* Image 1 */}
                    <Pressable onPress={()=>console.log("Interior Design")}>
                        <View style={{width: 139, height: 183, borderColor: COLORS.primary, margin:12, flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Image source={require("../assets/interior_design_and_decorating/decorating_services.jpeg")}
                                style={{
                                    height:159,
                                    width:139,
                                }}
                            />
                            <Text>Decorating Services</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={()=>console.log("Interior Design")}>
                        <View style={{width: 139, height: 183, borderColor: COLORS.primary, margin:12, flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Image source={require("../assets/interior_design_and_decorating/design_consultation.jpeg")}
                                style={{
                                    height:159,
                                    width:139,
                                }}
                            />
                            <Text>Design Consultations</Text>
                        </View>
                    </Pressable>

                    
                </ScrollView>
            </View>

            
            
        </View>
    )
}

export default Interior_design