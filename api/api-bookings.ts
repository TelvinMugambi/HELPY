import { NewBooking } from '../types/types';
import { supabase } from '../utils/supabase';

export async function addBooking(newBooking: NewBooking) {
  const { data, error } = await supabase.from('booking').insert([newBooking]);
  if (error) throw error;
  return data;
}

export async function getBookings() {
  const { data, error } = await supabase.from('booking').select();
  if (error) throw error;
  return data;
}
