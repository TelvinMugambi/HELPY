export type Category = {
  category_id: number;
  category_name: string;
};

export type Booking = {
  id: number;
  user_id: string;
  location: string;
  service_id: number;
  description: string;
  datetime: string;
  status: string;
};

export type NewBooking = Omit<Booking, 'id'>;
