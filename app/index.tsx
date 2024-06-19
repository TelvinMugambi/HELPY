import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import Auth from '../components/Auth'
import Account from '../components/Accounts'
import { View } from 'react-native'
import { Session } from '@supabase/supabase-js'
import Signup from './auth/screens/Signup'
import Login from './auth/screens/Login'
import Welcome from './auth/screens/Welcome'
import { Redirect } from 'expo-router'


export default function Index() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    console.log("Root index:", session)
  }, [])

  return <Redirect href={"/auth/screens/Welcome"}/>
}