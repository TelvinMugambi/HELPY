import { View, Text, SafeAreaView, ScrollView, TextInput, Alert } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import Button from '../../components/Button'
import COLORS from '../../constants/color'
import { supabase } from '../../utils/supabase'

export default function UserInfo() {
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
   

    useEffect(()=>{
        if (session){
            console.log ("user info session:", session)
            getProfile()
        }
    },[session])

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
    
    async function getProfile() {
        try {
          setLoading(true)
          if (!session?.user) throw new Error('No user on the session!')
    
          const { data, error, status } = await supabase
            .from('profiles')
            .select(`username, website, avatar_url`)
            .eq('id', session?.user.id)
            .single()
          if (error && status !== 406) {
            throw error
          }
          console.log(session?.user.id)
          console.log(session?.user.email)
    
          if (data) {
            setUsername(data.username)
            setFullname(data.fullname)
            setAvatarUrl(data.avatar_url)
            setPhone(data.phone)
            setLocation(data.location)
          }
        } catch (error) {
          if (error instanceof Error) {
            Alert.alert(error.message)
          }
        } finally {
          setLoading(false)
        }
    }

    async function updateProfile() {
        try {
          setLoading(true)
          if (!session?.user) throw new Error('No user on the session!')
    
          const updates = {
            id: session?.user.id,
            username,
            fullname,
            phone,
            location,
            updated_at: new Date(),
          }
    
          const { error } = await supabase.from('profiles').upsert(updates)
    
          if (error) {
            throw error
          }
        } catch (error) {
          if (error instanceof Error) {
            Alert.alert(error.message)
          }
        } finally {
          setLoading(false)
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
                        }}>Email</Text>

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
                                value={session?.user?.email}
                                disabled
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
                        onPress={() => updateProfile()}
                    
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}