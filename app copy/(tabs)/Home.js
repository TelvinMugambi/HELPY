import { Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { Text, View, Image, TextInput } from 'react-native';
import COLORS from '../../constants/color';
import { ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Slider from '../../components/Slider';
import BusinessList from '../../components/BusinessList';
import Categories from '../../components/Categories';
export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.grey_white }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.profileMainContainer}>
            <View style={styles.profileContainer}>
              <Image
                source={{
                  uri: 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=',
                }}
                style={styles.userImage}
              />
              <View>
                <Text style={{ color: COLORS.WHITE }}>Welcome,</Text>
                <Text style={{ color: COLORS.WHITE, fontSize: 20 }}>Telvin Mugambi</Text>
              </View>
            </View>
          </View>
          {/* Search Bar Section  */}
          <View style={styles.searchBarContainer}>
            <TextInput placeholder="Search" style={styles.textInput} />
            <FontAwesome name="search" style={styles.searchbtn} size={24} color={COLORS.PRIMARY} />
          </View>
        </View>
        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
          <Slider />
          <Categories />
          <BusinessList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: COLORS.PRIMARY,
  },
  profileMainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    width: '85%',
    fontSize: 16,
  },
  searchBarContainer: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  searchbtn: {
    backgroundColor: COLORS.WHITE,
    padding: 10,
    borderRadius: 8,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
});
