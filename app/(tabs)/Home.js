import { Pressable, SafeAreaView } from "react-native";
import { Text, View, Image } from "react-native";
import COLORS from "../../constants/color";
import { ScrollView } from "react-native";
import { Card } from 'react-native-paper';

export default function Home(){
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grey_white}}>
            <ScrollView>
                <View style={{
                    flex: 1,
                    margin:22
                }}>
                    <View style={{
                        marginBottom:12,
                        backgroundColor: COLORS.white
                    }}>
                        <View style={{
                            marginTop: 22,
                            marginBottom:22
                        }}>
                            <Text>Hello (username)</Text>
                        </View>

                        <View style={{
                            marginBottom:12
                        }}>
                            <Text>What are you looking for today</Text>
                        </View>
                    </View>

                    <View 
                        style={{
                            marginBottom:12,
                            backgroundColor: COLORS.white
                        }}
                    >
                        <View style={{
                            flex:1,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                            <Text>Maintenance and Repairs</Text>

                        </View>

                        <Pressable onPress={() => console.log("Pressed")}>

                            <View>
                                <Image 
                                    source={require("../../assets/maintenance_and_repairs/Appliance .jpeg")} 
                                    style={{
                                        width:139,
                                        height:154,
                                        borderRadius: 10
                                    }}
                                />

                                <Text>Appliance Repairs</Text>

                            </View>
                            
                        </Pressable>
                        
                    </View>

                    <View 
                        style={{
                            marginBottom:12,
                            backgroundColor: COLORS.white
                        }}
                    >
                        <View style={{
                            flex:1,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                            <Text>Cleaning Services</Text>

                        </View>

                        <Pressable onPress={() => console.log("Pressed")}>

                            <View>
                                <Image 
                                    source={require("../../assets/Cleaning_Services/residential_cleaning.jpeg")} 
                                    style={{
                                        width:139,
                                        height:154,
                                        borderRadius: 10
                                    }}
                                />

                                <Text>Resedential Cleaning</Text>

                            </View>

                        </Pressable>
                        
                    </View>

                    <View style={{
                        marginBottom:12,
                        backgroundColor: COLORS.white
                    }}>
                        <Text>Landscaping and Outdoor Services</Text>
                    </View>

                    <View style={{
                        marginBottom:12,
                        backgroundColor: COLORS.white
                    }}>
                        <Text>Renovation and Remodeling</Text>
                    </View>

                    <View style={{
                        marginBottom:12,
                        backgroundColor: COLORS.white
                    }}>
                        <Text>Interior Design and Decorating</Text>
                    </View>

                    <View style={{
                        marginBottom:12,
                        backgroundColor: COLORS.white
                    }}>
                        <Text>Pest Control</Text>
                    </View>

                    <View style={{
                        marginBottom:12,
                        backgroundColor: COLORS.white
                    }}>
                        <Text>Security and Technology</Text>
                    </View>

                    <View style={{
                        marginBottom:12,
                        backgroundColor: COLORS.white
                    }}>
                        <Text>Handyman Services</Text>
                    </View>

                    <View style={{
                        marginBottom:12,
                        backgroundColor: COLORS.white
                    }}>
                        <Text>Moving and Storage</Text>
                    </View>

                    <View style={{
                        marginBottom:12,
                        backgroundColor: COLORS.white
                    }}>
                        <Text>Specialty Services</Text>
                    </View>
                
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

