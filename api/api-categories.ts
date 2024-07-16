import { supabase } from '../utils/supabase';
export async function getCategories() {
  const { data, error } = await supabase.from('category').select('*');
  if (error) throw error;
  return data;
}
