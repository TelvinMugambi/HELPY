import { supabase } from "../../../utils/supabase"
import { StyleSheet, View, Alert } from 'react-native'
import { Button, Input } from '@rneui/themed'
import { Session } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'
import Avatar from "../../../components/Avatar"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView } from "react-native"
export default function Account({ session }: { session: Session }) {
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')
    const [location, setLocation] = useState('')
  
    useEffect(() => {
      if (session) getProfile()
      else{
    console.log("Error")
    }
    }, [session])

    console.log(session)
  
    async function getProfile() {
      try {
        setLoading(true)
        if (!session?.user) throw new Error('No user on the session!')
      
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
  
    async function updateProfile({
      username,
      phone,
      avatar_url,
      location,
    }: {
      username: string
      phone: string
      avatar_url: string
      location:string
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
  
    return (
        <SafeAreaView>
            <ScrollView>
        <View style={styles.container}>
            <View>
            <Avatar
            size={200}
            url={avatarUrl}
            onUpload={(url: string) => {
                setAvatarUrl(url)
                updateProfile({ username, phone, avatar_url: url,location })
            }}
            />
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Input label="Email" value={session?.user?.email} disabled />
        </View>
        <View style={styles.verticallySpaced}>
          <Input label="Username" value={username || ''} onChangeText={(text) => setUsername(text)} />
        </View>
        <View style={styles.verticallySpaced}>
          <Input label="phone" value={phone || ''} onChangeText={(text) => setPhone(text)} />
        </View>
        <View style={styles.verticallySpaced}>
          <Input label="location" value={location || ''} onChangeText={(text) => setLocation(text)} />
        </View>
  
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Button
            title={loading ? 'Loading ...' : 'Update'}
            onPress={() => updateProfile({ username, phone, avatar_url: avatarUrl, location})}
            disabled={loading}
          />
        </View>
  
        <View style={styles.verticallySpaced}>
          <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 40,
      padding: 12,
    },
    verticallySpaced: {
      paddingTop: 4,
      paddingBottom: 4,
      alignSelf: 'stretch',
    },
    mt20: {
      marginTop: 20,
    },
  })