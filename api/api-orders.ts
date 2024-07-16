import { supabase } from '../utils/supabase';
export async function getOrders() {
  const { data, error } = await supabase.from('order').select('*');
  if (error) throw error;
  return data;
}

export async function getSP() {
  const { data, error } = await supabase.from('service_provider').select('*');
  if (error) throw error;
  return data;
}
