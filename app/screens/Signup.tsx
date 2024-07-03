import Button from "../../components/Button";
import COLORS from "../../constants/color";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image, Pressable,Alert, TextInput, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, AppState } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Signup(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [isFormValid, setisFormValid] = useState(false);

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
                <ScrollView>

                    <View style={{ flex: 1, marginHorizontal: 22 }}>

                        <View style={{ marginVertical: 22 }}>
                            <Text style={{
                                fontSize: 22,
                                fontWeight: 'bold',
                                marginVertical: 12,
                                color: COLORS.black
                            }}>
                                Create Account
                            </Text>

                            <Text style={{
                                fontSize: 16,
                                color: COLORS.black
                            }}>Connect with your friend today!</Text>
                        </View>
                    
                        <View style={{ marginBottom: 12 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8
                            }}>Email address</Text>

                            <View style={{
                                width: "100%",
                                height: 48,
                                borderColor: COLORS.black,
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22
                            }}>
                                <TextInput
                                    placeholder='Enter your email address'
                                    placeholderTextColor={COLORS.black}
                                    onChangeText={(email) => setEmail(email)}
                                    value={email}
                                    keyboardType='email-address'
                                    style={{
                                        width: "100%"
                                    }}
                                />
                            </View>
                        </View>

                        <View style={{ marginBottom: 12 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8
                            }}>Password</Text>

                            <View style={{
                                width: "100%",
                                height: 48,
                                borderColor: COLORS.black,
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22
                            }}>
                                <TextInput
                                    placeholder='Enter your password'
                                    placeholderTextColor={COLORS.black}
                                    onChangeText={(password) => setPassword(password)}
                                    value={password}
                                    secureTextEntry={isPasswordShown}
                                    style={{
                                        width: "100%"
                                    }}
                                    
                                />

                                <TouchableOpacity
                                    onPress={() => setIsPasswordShown(!isPasswordShown)}
                                    style={{
                                        position: "absolute",
                                        right: 12
                                    }}
                                >
                                    {
                                        isPasswordShown == true ? (
                                            <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                        ) : (
                                            <Ionicons name="eye" size={24} color={COLORS.black} />
                                        )
                                    }

                                </TouchableOpacity>
                            </View>
                        </View>


                        <Button
                            title="Authenticate"
                            filled
                            style={{
                                marginTop: 18,
                                marginBottom: 4,
                            }}
                            disabled={!isFormValid}
                            onPress={() => console.log("Signup function")}
                        
                        />

                        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                            <View
                                style={{
                                    flex: 1,
                                    height: 1,
                                    backgroundColor: COLORS.grey,
                                    marginHorizontal: 10
                                }}
                            />
                            <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
                            <View
                                style={{
                                    flex: 1,
                                    height: 1,
                                    backgroundColor: COLORS.grey,
                                    marginHorizontal: 10
                                }}
                            />
                        </View> */}

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            

                            {/* <TouchableOpacity
                                onPress={() => console.log('pressed')}
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    height: 52,
                                    borderWidth: 1,
                                    borderColor: COLORS.grey,
                                    marginRight: 4,
                                    borderRadius: 10
                                }}
                            >
                                <Image
                                    source={require("../assets/google.png")}
                                    style={{
                                        height: 36,
                                        width: 36,
                                        marginRight: 8
                                    }}
                                    resizeMode='contain'
                                />

                                <Text>Google</Text>
                            </TouchableOpacity> */}
                        </View>

                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            marginVertical: 22
                        }}>
                            <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account</Text>
                            <Pressable
                                onPress={() => console.log("Go to Login page")}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    color: COLORS.primary,
                                    fontWeight: "bold",
                                    marginLeft: 6
                                }}>Login</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}