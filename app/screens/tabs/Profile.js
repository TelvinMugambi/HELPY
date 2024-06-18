import { useState, useEffect } from 'react'
import { supabase } from '../../../utils/supabase'
import COLORS from '../../../constants/color'
import Avatar from '../../../components/Avatar'
import Button from '../../../components/Button'
import React from 'react';
import { StyleSheet, View, Alert, TextInput, Text} from "react-native";

export default function Profile(session){
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')
    const [location, setLocation] = useState('')

    useEffect(() => {
        if (session) getProfile()
            console.log(session)
    }, [session])

    async function getProfile() {
        try {
            setLoading(true)
            if (!session?.user) throw new Error('No user on the session!')
                getSession()
      
            const { data, error, status } = await supabase
              .from('profiles')
              .select(`username, phone, avatar_url,location`)
              .eq('id', session?.user.id)
              .single()
            if (error && status !== 406) {
              throw error
            }
      
            if (data) {
              setUsername(data.username)
              setPhone(data.phone)
              setAvatarUrl(data.avatar_url)
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

    async function getSession(){
        const {data:session} = await supabase.auth.getSession()

        console.log(session)
    }

    async function updateProfile({
        username,
        phone,
        avatar_url,
        location,
    }) {
        try {
            setLoading(true)
            if (!session?.user) throw new Error('No user on the session!')
      
            const updates = {
              id: session?.user.id,
              username,
              phone,
              avatar_url,
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
    return(
        <View>
        <View>
            <Avatar
                size={200}
                url={avatarUrl}
                onUpload={(url) => {
                setAvatarUrl(url)
                updateProfile({ avatar_url: url })
                }}
            />
        </View>
        <View style={style.container}>
            <Text>Email</Text>

            <View style={style.textbox}>
                <TextInput
                    value={session?.user?.email}
                    style={{
                        width: "100%"
                    }}
                />
            </View>
        </View>
        <View style={style.container}>
                    <Text>Username</Text>

                    <View style={style.textbox}>
                        <TextInput
                            value={username || ''} 
                            onChangeText={(text) => setUsername(text)}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
        </View>
        <View style={style.container}>
                    <Text style={style.labels}>Phone</Text>

                    <View style={style.textbox}>
                        <TextInput
                            value={phone || ''} 
                            onChangeText={(text) => setPhone(text)}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
        </View>
        <View style={style.container}>
                    <Text>Location</Text>

                    <View style={style.textbox}>
                        <TextInput
                            value={location || ''} 
                            onChangeText={(text) => setLocation(text)}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
        </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        marginBottom: 12
    },
    labels:{
        fontSize: 16,
        fontWeight: 400,
        marginVertical: 8
    },
    textbox:{
        width: "100%",
        height: 48,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22
    }
})