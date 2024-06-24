import { Pressable, SafeAreaView } from "react-native";
import { Text, View, Image } from "react-native";
import COLORS from "../../constants/color";
import { ScrollView } from "react-native";
import { Card } from 'react-native-paper';
import Services from "../../components/Services";

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

                    <Services />
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

