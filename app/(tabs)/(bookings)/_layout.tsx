import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BookingUpcoming from '../../screens/BookingUpcoming';
import BookingHistory from '../../screens/BookingHistory';
import BookingDraft from '../../screens/BookingDraft';

const TopTab = createMaterialTopTabNavigator();

export default function Booking() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="All Bookings" component={BookingUpcoming} />
      <TopTab.Screen name="Accepted" component={BookingHistory} />
      <TopTab.Screen name="Rejected" component={BookingDraft} />
    </TopTab.Navigator>
  );
}
