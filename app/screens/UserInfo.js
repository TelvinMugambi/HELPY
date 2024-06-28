import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import Button from '../../components/Button'
import COLORS from '../../constants/color'
import { supabase } from '../../utils/supabase'

export default function UserInfo() {
    
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [phone, setPhone] = useState('')
    const[location, setLocation] = useState('')

    async function insertUser(){

        try {
            const { data, error } = await supabase
            .from('profiles')
            .insert([
            { username: username },
            { full_name: fullname },
            { phone: phone },
            { location: location},
            ])
            .select()

            if(data){
                console.log("Success fully inserted users...")
                console.log(data)
            }
            if(error){
                console.log("Error inserting user...")
                console.log(error)
            }
        } catch (error) {
            console.log(error)
        }
        

    }
    
    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
            <ScrollView>
                <View style = {{
                    flex: 1, 
                    marginHorizontal: 22
                }}>
                    <View style={{marginHorizontal:22}}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginVertical: 12,
                            color: COLORS.black
                        }}>Finish your sign up</Text>

                        <Text style={{
                            fontSize: 16,
                            color: COLORS.black
                        }}>A few steps are remaining ...</Text>
                    </View>

                    
                    
                    <View style={{ marginBottom: 12 }}>
                            <Text style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8
                        }}>Username</Text>

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
                                placeholder='Enter your Username'
                                placeholderTextColor={COLORS.black}
                                onChangeText={(username)=>setUsername(username)}
                                value={username}
                                style={{
                                    width: "100%",
                                    padding:10
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 12 }}>
                            <Text style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8
                        }}>Full name</Text>

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
                                placeholder='Enter your Full name'
                                placeholderTextColor={COLORS.black}
                                onChangeText={(fullname)=>setFullname(fullname)}
                                value={fullname}
                                style={{
                                    width: "100%",
                                    padding:10
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 12 }}>
                            <Text style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8
                        }}>Phone number</Text>

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
                                placeholder='Enter your Phone number'
                                placeholderTextColor={COLORS.black}
                                onChangeText={(phone)=>setPhone(phone)}
                                value={phone}
                                keyboardType='phone-pad'
                                style={{
                                    width: "100%",
                                    padding:10
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 12 }}>
                            <Text style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8
                        }}>Location</Text>

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
                                placeholder='Enter your Location'
                                placeholderTextColor={COLORS.black}
                                onChangeText={(location)=>setLocation(location)}
                                value={location}
                                style={{
                                    width: "100%",
                                    padding:10
                                }}
                            />
                        </View>
                    </View>

                    <Button
                        title="Sign up"
                        filled
                        style={{
                            marginTop: 18,
                            marginBottom: 4,
                        }}
                        onPress={() => insertUser()}
                    
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}