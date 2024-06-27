import { View, Text, SafeAreaView, ScrollView, TextInput, Pressable } from 'react-native'
import React from 'react'
import COLORS from '../../constants/color'
import { Card } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Avatar } from "react-native-paper";
import Button from '../../components/Button';

export default function ServiceProviders() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white, borderWidth:0.2, padding:20}}>
        <ScrollView>
            <View style={{
                flex:1,
                backgroundColor:COLORS.white,
                padding: 12
            }}>
                <Pressable onPress={() => router.back()}>
                    <Ionicons name="arrow-back-sharp" size={24} color="black" />
                </Pressable>
                
                <Card style={{margin:20}}>
                    <Card.Content style={{flex:1,alignItems: 'center', justifyContent:'center'}}>
                        <Text>Plumbing</Text>
                        <Avatar.Image size={75} source={require('../../assets/icons/moving.png')} />
                    </Card.Content>
                    <Card.Content>
                        <View style={{marginBottom:12}}>
                            <Text style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8
                            }}>Fullname</Text>
                            <View style= {{
                                width: "100%",
                                height: 48,
                                borderColor: COLORS.black,      
                                borderWidth: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22
                                }}>
                                <TextInput
                                    placeholder='Display Fullname'
                                    placeholderTextColor={COLORS.black}
                                    style={{
                                    width: "100%"
                                    }}
                                />
                            </View>
                        </View>

                        <View style={{marginBottom:12}}>
                            <Text style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8
                            }}>Phone</Text>
                            <View style= {{
                                width: "100%",
                                height: 48,
                                borderColor: COLORS.black,      
                                borderWidth: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22
                                }}>
                                <TextInput
                                    placeholder='Display Phone'
                                    placeholderTextColor={COLORS.black}
                                    style={{
                                    width: "100%"
                                    }}
                                />
                            </View>
                        </View>

                        <View style={{marginBottom:12}}>
                            <Text style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8
                            }}>Service</Text>
                            <View style= {{
                                width: "100%",
                                height: 48,
                                borderColor: COLORS.black,      
                                borderWidth: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22
                                }}>
                                <TextInput
                                    placeholder='Display Service'
                                    placeholderTextColor={COLORS.black}
                                    style={{
                                    width: "100%"
                                    }}
                                />
                            </View>
                        </View>

                        <View style={{marginBottom:12}}>
                            <Text style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8
                            }}>Location</Text>
                            <View style= {{
                                width: "100%",
                                height: 48,
                                borderColor: COLORS.black,      
                                borderWidth: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22
                                }}>
                                <TextInput
                                    placeholder='Display Location'
                                    placeholderTextColor={COLORS.black}
                                    style={{
                                    width: "100%"
                                    }}
                                />
                            </View>
                        </View>
                        <Button
                        title="Choose Myrtle Harper"
                        filled
                        style={{
                            marginTop: 18,
                            marginBottom: 4,
                        }}
                        onPress={() => console.log("Choose this service provider")}
                    
                        />
                    </Card.Content>
                </Card>

                <Card style={{margin:20}}>
                    <Card.Content style={{flex:1,alignItems: 'center', justifyContent:'center'}}>
                        <Text>Plumbing</Text>
                        <Avatar.Image size={75} source={require('../../assets/icons/moving.png')} />
                    </Card.Content>
                    <Card.Content>
                        <View style={{marginBottom:12}}>
                            <Text style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8
                            }}>Fullname</Text>
                            <View style= {{
                                width: "100%",
                                height: 48,
                                borderColor: COLORS.black,      
                                borderWidth: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22
                                }}>
                                <TextInput
                                    placeholder='Display Fullname'
                                    placeholderTextColor={COLORS.black}
                                    style={{
                                    width: "100%"
                                    }}
                                />
                            </View>
                        </View>

                        <View style={{marginBottom:12}}>
                            <Text style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8
                            }}>Phone</Text>
                            <View style= {{
                                width: "100%",
                                height: 48,
                                borderColor: COLORS.black,      
                                borderWidth: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22
                                }}>
                                <TextInput
                                    placeholder='Display Phone'
                                    placeholderTextColor={COLORS.black}
                                    style={{
                                    width: "100%"
                                    }}
                                />
                            </View>
                        </View>

                        <View style={{marginBottom:12}}>
                            <Text style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8
                            }}>Service</Text>
                            <View style= {{
                                width: "100%",
                                height: 48,
                                borderColor: COLORS.black,      
                                borderWidth: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22
                                }}>
                                <TextInput
                                    placeholder='Display Service'
                                    placeholderTextColor={COLORS.black}
                                    style={{
                                    width: "100%"
                                    }}
                                />
                            </View>
                        </View>

                        <View style={{marginBottom:12}}>
                            <Text style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8
                            }}>Location</Text>
                            <View style= {{
                                width: "100%",
                                height: 48,
                                borderColor: COLORS.black,      
                                borderWidth: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22
                                }}>
                                <TextInput
                                    placeholder='Display Location'
                                    placeholderTextColor={COLORS.black}
                                    style={{
                                    width: "100%"
                                    }}
                                />
                            </View>
                        </View>
                        <Button
                        title="Choose Eleanor Martin"
                        filled
                        style={{
                            marginTop: 18,
                            marginBottom: 4,
                        }}
                        onPress={() => console.log("Choose this service provider")}
                    
                        />
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}