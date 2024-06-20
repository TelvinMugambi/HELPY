import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useRootNavigationState, router } from 'expo-router';
import { supabase } from '../utils/supabase';
import Home from './screens/Home';

export default function Index() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const rootNavigationState = useRootNavigationState();

  useEffect(() => {
    // Fetch the initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Set up the authentication state change listener
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup listener on component unmount
    // return () => {
    //   authListener.unsubscribe();
    // };
  }, []);

  useEffect(() => {
    if (!loading && rootNavigationState?.key) {
      if (session && session.user) {
        router.push('../screens/Welcome');
      } else {
        router.push('../screens/Search');
      }
    }
  }, [session, loading, rootNavigationState]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading && <ActivityIndicator size="large" />}
    </View>
  );
}
