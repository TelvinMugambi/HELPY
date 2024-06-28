import { Pressable, SafeAreaView, StyleSheet } from "react-native";
import { Text, View, TextInput, Alert } from "react-native";
import { Avatar } from "react-native-paper";
import COLORS from "../../constants/color";
import Button from "../../components/Button";
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { supabase } from "../../utils/supabase";
import { Session } from '@supabase/supabase-js'
import { router } from "expo-router";
import { ScrollView } from "react-native";


export default function Profile({session, url, size = 150, onUpload}){

    const [uploading, setUploading] = useState(false)
    const[loading, setLoading] = useState(true)
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
    const [avatarUrl, setAvatarUrl] = useState(null)
    const avatarSize = { height: size, width: size }

    useEffect(() => {
        if (url) downloadImage(url)
    }, [url])

    useEffect(() => {
        if (session) getProfile()
    }, [session])

    async function getProfile() {
        try {
          setLoading(true)
          if (!session?.user) throw new Error('No user on the session!')
    
          const { data, error, status } = await supabase
            .from('profiles')
            .select(`username,fullname, avatar_url, phone, location`)
            .eq('id', session?.user.id)
            .single()
          if (error && status !== 406) {
            throw error
          }
    
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

    async function downloadImage() {
        try {
          const { data, error } = await supabase.storage.from('avatars').download(path)
    
          if (error) {
            throw error
          }
    
          const fr = new FileReader()
          fr.readAsDataURL(data)
          fr.onload = () => {
            setAvatarUrl()
          }
        } catch (error) {
          if (error instanceof Error) {
            console.log('Error downloading image: ', error.message)
          }
        }
    }

    async function uploadAvatar() {
        try {
          setUploading(true)
    
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, // Restrict to only images
            allowsMultipleSelection: false, // Can only select one image
            allowsEditing: true, // Allows the user to crop / rotate their photo before uploading it
            quality: 1,
            exif: false, // We don't want nor need that data.
          })
    
          if (result.canceled || !result.assets || result.assets.length === 0) {
            console.log('User cancelled image picker.')
            return
          }
    
          const image = result.assets[0]
          console.log('Got image', image)
    
          if (!image.uri) {
            throw new Error('No image uri!') // Realistically, this should never happen, but just in case...
          }
    
          const arraybuffer = await fetch(image.uri).then((res) => res.arrayBuffer())
    
          const fileExt = image.uri?.split('.').pop()?.toLowerCase() ?? 'jpeg'
          const path = `${Date.now()}.${fileExt}`
          const { data, error: uploadError } = await supabase.storage
            .from('avatars')
            .upload(path, arraybuffer, {
              contentType: image.mimeType ?? 'image/jpeg',
            })
    
          if (uploadError) {
            throw uploadError
          }
    
          onUpload(data.path)
        } catch (error) {
          if (error instanceof Error) {
            Alert.alert(error.message)
          } else {
            throw error
          }
        } finally {
          setUploading(false)
        }
    }

    async function updateProfile({
        username,
        fullname,
        avatar_url,
        phone,
        location
      }) {
        try {
          setLoading(true)
          if (!session?.user) throw new Error('No user on the session!')
    
          const updates = {
            id: session?.user.id,
            username,
            fullname,
            avatar_url,
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

    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if(error){
          console.log(error)
        }else{
          router.back("../Login")
        }
        
    }
 
    return(
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView>
          <View style = {{
              flex: 1,
              marginHorizontal: 22
          }}>
            
            <View style = {{
                alignItems: 'center',
                justifyContent: 'center',
                margin: 24,
                padding:12,
                borderWidth:0.2
            }}>
                <Pressable onPress={() => uploadAvatar()}>
                <Avatar.Image  
                    size={100} 
                    source={{ uri: avatarUrl }}
                style = {{
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 24}}
                />
                </Pressable>

                <View style = {{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    backgroundColor: COLORS.grey,  // Optional: to make the icon more visible
                    borderRadius: 12,  // Optional: to make the background a circle
                    padding: 2,  // Optional: to add some space around the icon
                }}>
                    <Pressable onPress={() => console.log("Enable edit")}>
                        <Ionicons name="pencil" size={24} color="black" />
                    </Pressable>
                </View>
            </View>

            <View style={{marginBottom: 12}}>
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
                            value={session?.user?.email}
                            disabled
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
            </View>

            <View style={{marginBottom: 12}}>
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
                            value={username || ''} 
                            onChangeText={(text) => setUsername(text)}
                            
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
            </View>

            <View style={{marginBottom: 12}}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Full Name</Text>

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
                            value={fullname || ''} 
                            onChangeText={(text) => setFullname(text)}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
            </View>

            <View style={{marginBottom: 12}}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Phone Number</Text>

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
                            value={phone || ''} 
                            onChangeText={(text) => setPhone(text)}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
            </View>

            <View style={{marginBottom: 12}}>
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
                            value={location || ''} 
                            onChangeText={(text) => setLocation(text)}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
            </View>

            <Button
                title="Update"
                filled
                style={{
                    marginTop: 18,
                    marginBottom: 4,
                }}
                
                onPress={() => updateProfile()}
            
            />

            <Button
                title="Log out"
                filled
                style={{
                    marginTop: 18,
                    marginBottom: 4,
                }}
                
                onPress={() => signOut()}
            
            />

          </View>
        </ScrollView>

      </SafeAreaView>
    )
}