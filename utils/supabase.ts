import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wxsrhkltwcavskoemuth.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4c3Joa2x0d2NhdnNrb2VtdXRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2MDE3NzEsImV4cCI6MjAzNDE3Nzc3MX0.ZoKX5HzCNZEKCg6wNZahB8hnhiVsATVXAqtWXgBvYwA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})