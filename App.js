import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gey }} >
        <ScrollView>
            <View style={{
                height:72,
                flex:1,
                flexDirection:'column',
                alignItems: 'flex-start',
                padding: '12px 16px',
                margin:12,
               
                backgroundColor: COLORS.white

            }}>
                <Searchbar
                    placeholder='Search'
                    onChangeText={setsearchQuery}
                    value={searchQuery}
                />

            </View>

            <View style ={{
                display: 'flex',
                width: '341px',
                height: '699px', 
                top: '88px',
                backgroundColor: COLORS.white,
            }}>
                <Text>All Categories</Text>
                <View style={{
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: ' 0px 7px 0px 0px',
                    width: '309px',
                    height: '378px'
                    
                }}>
                    <Text>gfgfgfg</Text>
                    <View style = {{
                        flex: 'none',
                        flexGrow: 0
                    }}>
                        <View style = {{
                            display: 'flex',
                            flexDirection:'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0px',
                            width: '295px',
                            height: '110px'
                        }}>
                            {/* 1st row */}
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                padding: '0px',
                                width: '73px',
                                height: '110px'
                            }}>
                                {/* 1st image */}
                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '0px',
                                    width: '73px',
                                    height: '110px'
                                }}>
                                    <Image style= {{
                                        position: 'absolute',
                                        width: '72px',
                                        height: '72px',
                                        left: '0.5px',
                                        top: '0px'
                                    }}  
                                    source={require("../../assets/icons/maintenance_and_repairs.png")}/>
                                    <Text style={{fontSize:10, fontWeight:'medium'}}>Maintenance and Repair</Text>

                                </View>

                            </View>

                        </View>
                    </View>
                </View>
            </View>
            
        </ScrollView>
         
     </SafeAreaView>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
