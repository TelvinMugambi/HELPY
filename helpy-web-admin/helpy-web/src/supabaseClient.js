// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hbmdvtbpunrbkqxlphyd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhibWR2dGJwdW5yYmtxeGxwaHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5MjU5MjksImV4cCI6MjAzNTUwMTkyOX0.JvzaQ4RqBeBPYg3SPK9eFCVNn33bdaGQhWd7_A3HEQY';
export const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchUserRole = async (userId) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', userId)
      .single();
    return data.role;
  };