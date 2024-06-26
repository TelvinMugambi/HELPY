import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.gey }} >
        <ScrollView>
        <View style = {{
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
                        style={{margin:10}}
                    />
                </View>
            <View style = {{
                    display: 'flex',
                    // width: '341px',
                    // height: '699px', 
                    top: '88px',
                    backgroundColor: COLORS.white,
                    
                }}>
                    <Text>All Categories</Text>
                    <View style = {{
                        display: 'flex',
                        flexDirection:'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        padding: ' 0px 7px 0px 0px',
                        // width: '309px',
                        // height: '378px'
                    }}>

                    </View>
                        
                    {/* Maintenance and Repairs */}
                    <View style = {{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        margin:10,
                        backgroundColor: COLORS.white
                    }}>
                        <TouchableOpacity onPress={() => getSubcategories()}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                height: 100,
                                borderWidth: 1,
                                borderColor: COLORS.grey,
                                marginRight: 4,
                                borderRadius: 10
                            }}>
                                <Image source={require("../../assets/icons/maintenance_and_repairs.png")}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        margin: 8
                                    }}
                                    resizeMode='contain'                            
                                />
                                {/* <Text style={{fontSize: 12, fontWeight: 'bold'}}>{categories[0].category_name}</Text> */}
                        </TouchableOpacity>
                    </View>

                    {/* Cleaning services*/}
                    <View style = {{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        margin:10,
                        backgroundColor: COLORS.white
                    }}>
                        <TouchableOpacity onPress={() => console.log("Press")}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                height: 100,
                                borderWidth: 1,
                                borderColor: COLORS.grey,
                                marginRight: 4,
                                borderRadius: 10
                            }}>
                                <Image source={require("../../assets/icons/cleaning_services.png")}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        margin: 8
                                    }}
                                    resizeMode='contain'                            
                                />
                                
                        </TouchableOpacity>
                    </View>

                    {/* Landscaping and Outdoor services*/}
                    <View style = {{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        margin:10,
                        backgroundColor: COLORS.white
                    }}>
                        <TouchableOpacity onPress={() => console.log("Landscaping and Outdoor services")}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                height: 100,
                                borderWidth: 1,
                                borderColor: COLORS.grey,
                                marginRight: 4,
                                borderRadius: 10
                            }}>
                                <Image source={require("../../assets/icons/landscaping.png")}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        margin: 8
                                    }}
                                    resizeMode='contain'                            
                                />
                               
                        </TouchableOpacity>
                    </View>

                    {/* Renovation and Remodelling*/}
                    <View style = {{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        margin:10,
                        backgroundColor: COLORS.white
                    }}>
                        <TouchableOpacity onPress={() => console.log("Renovation and Remodelling")}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                height: 100,
                                borderWidth: 1,
                                borderColor: COLORS.grey,
                                marginRight: 4,
                                borderRadius: 10
                            }}>
                                <Image source={require("../../assets/icons/remodeling.png")}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        margin: 8
                                    }}
                                    resizeMode='contain'                            
                                />
                                
                        </TouchableOpacity>
                    </View>

                    {/* Interior design and decorating*/}
                    <View style = {{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        margin:10,
                        backgroundColor: COLORS.white
                    }}>
                        <TouchableOpacity onPress={() => console.log("Interior design and decorating")}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                height: 100,
                                borderWidth: 1,
                                borderColor: COLORS.grey,
                                marginRight: 4,
                                borderRadius: 10
                            }}>
                                <Image source={require("../../assets/icons/interior-design.png")}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        margin: 8
                                    }}
                                    resizeMode='contain'                            
                                />
                                
                        </TouchableOpacity>
                    </View>

                    {/* Pest control*/}
                    <View style = {{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        margin:10,
                        backgroundColor: COLORS.white
                    }}>
                        <TouchableOpacity onPress={() => console.log("Pest control")}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                height: 100,
                                borderWidth: 1,
                                borderColor: COLORS.grey,
                                marginRight: 4,
                                borderRadius: 10
                            }}>
                                <Image source={require("../../assets/icons/pest_control.png")}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        margin: 8
                                    }}
                                    resizeMode='contain'                            
                                />
                               
                        </TouchableOpacity>
                    </View>

                    {/* Security and Technology*/}
                    <View style = {{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        margin:10,
                        backgroundColor: COLORS.white
                    }}>
                        <TouchableOpacity onPress={() => console.log("Security and Technology")}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                height: 100,
                                borderWidth: 1,
                                borderColor: COLORS.grey,
                                marginRight: 4,
                                borderRadius: 10
                            }}>
                                <Image source={require("../../assets/icons/security.png")}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        margin: 8
                                    }}
                                    resizeMode='contain'                            
                                />
                                
                        </TouchableOpacity>
                    </View>

                    {/* Handyman services*/}
                    <View style = {{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        margin:10,
                        backgroundColor: COLORS.white
                    }}>
                        <TouchableOpacity onPress={() => console.log("Handyman services")}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                height: 100,
                                borderWidth: 1,
                                borderColor: COLORS.grey,
                                marginRight: 4,
                                borderRadius: 10
                            }}>
                                <Image source={require("../../assets/icons/handyman.png")}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        margin: 8
                                    }}
                                    resizeMode='contain'                            
                                />
                               
                        </TouchableOpacity>
                    </View> 

                    {/* Moving and storage*/}
                    <View style = {{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        margin:10,
                        backgroundColor: COLORS.white
                    }}>
                        <TouchableOpacity onPress={() => console.log("Moving and storage")}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                height: 100,
                                borderWidth: 1,
                                borderColor: COLORS.grey,
                                marginRight: 4,
                                borderRadius: 10
                            }}>
                                <Image source={require("../../assets/icons/moving.png")}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        margin: 8
                                    }}
                                    resizeMode='contain'                            
                                />
                                
                        </TouchableOpacity>
                    </View>

                    {/* Speciality services*/}
                    <View style = {{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        margin:10,
                        backgroundColor: COLORS.white
                    }}>
                        <TouchableOpacity onPress={() => console.log("Speciality services")}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                height: 100,
                                borderWidth: 1,
                                borderColor: COLORS.grey,
                                marginRight: 4,
                                borderRadius: 10
                            }}>
                                <Image source={require("../../assets/icons/speciality.png")}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        margin: 8
                                    }}
                                    resizeMode='contain'                            
                                />
                                
                        </TouchableOpacity>
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
