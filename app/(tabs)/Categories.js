import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../../constants/color';
import { Searchbar } from 'react-native-paper';
import { supabase } from '../../utils/supabase';
import { Session } from '@supabase/supabase-js'
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';



export default function Categories() {
    const [searchQuery, setsearchQuery] = React.useState('')
    const [fetcherror, setFetcherror] = useState(null)
    const [services, setServices] = useState(null)
    const [categories, setCategories] = useState([])

    

    useEffect(()=>{
        getCategories()
    },[])

    // async function getServices(){
    //     try {
            
    //         let { data: services, error } = await supabase
    //         .from('services')
    //         .select('service_name')

    //         if(services){
    //             setServices(services)
    //             setFetcherror(null)
    //         }

    //         if(error){
    //             setFetcherror("Could not fetch data")
    //             setServices(null)
    //             console.log(error)
    //         }

    //     } catch (error) {
    //         setFetcherror("Could not fetch data")
    //         setServices(null)
    //         console.log(error)
    //     }
    // }

    async function getCategories(){
        try {
            
            let { data: categories, error } = await supabase
            .from('categories')
            .select('category_name')
            


            if (categories){
                setCategories(categories)
                setFetcherror(null)
            }

            if(error){
                setFetcherror("Could not fetch  data")
                setCategories(null)
                console.log(error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <SafeAreaView style ={{flex: 1, backgroundColor: COLORS.gey}}>
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
                {/* Categories content */}
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
                        
                    
                        <View style = {{
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <TouchableOpacity onPress={() => console.log("Maintenance and Repairs")}
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        height: 52,
                                        borderWidth: 1,
                                        borderColor: COLORS.grey,
                                        marginRight: 4,
                                        borderRadius: 10
                                    }}>
                                        <Image source={require("../../assets/icons/maintenance_and_repairs.png")}
                                            style={{
                                                height: 36,
                                                width: 36,
                                                marginRight: 8
                                            }}
                                            resizeMode='contain'                            
                                        />
                                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>{categories[0].category_name}</Text>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => console.log("Cleaning services")}
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        height: 52,
                                        borderWidth: 1,
                                        borderColor: COLORS.grey,
                                        marginRight: 4,
                                        borderRadius: 10
                                    }}>
                                        <Image source={require("../../assets/icons/cleaning_services.png")}
                                            style={{
                                                height: 36,
                                                width: 36,
                                                marginRight: 8
                                            }}
                                            resizeMode='contain'                            
                                        />
                                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>Cleaning services</Text>

                            </TouchableOpacity>

                        </View>

                        <View style = {{
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <TouchableOpacity onPress={() => console.log("Landscaping services")}
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        height: 52,
                                        borderWidth: 1,
                                        borderColor: COLORS.grey,
                                        marginRight: 4,
                                        borderRadius: 10
                                    }}>
                                        <Image source={require("../../assets/icons/landscaping.png")}
                                            style={{
                                                height: 36,
                                                width: 36,
                                                marginRight: 8
                                            }}
                                            resizeMode='contain'                            
                                        />
                                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>Landscaping services</Text>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => console.log("Renovation services")}
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        height: 52,
                                        borderWidth: 1,
                                        borderColor: COLORS.grey,
                                        marginRight: 4,
                                        borderRadius: 10
                                    }}>
                                        <Image source={require("../../assets/icons/remodeling.png")}
                                            style={{
                                                height: 36,
                                                width: 36,
                                                marginRight: 8
                                            }}
                                            resizeMode='contain'                            
                                        />
                                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>Renovation services</Text>

                            </TouchableOpacity>

                        </View>

                        <View style = {{
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <TouchableOpacity onPress={() => console.log("Interior design")}
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        height: 52,
                                        borderWidth: 1,
                                        borderColor: COLORS.grey,
                                        marginRight: 4,
                                        borderRadius: 10
                                    }}>
                                        <Image source={require("../../assets/icons/interior-design.png")}
                                            style={{
                                                height: 36,
                                                width: 36,
                                                marginRight: 8
                                            }}
                                            resizeMode='contain'                            
                                        />
                                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>Interior design</Text>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => console.log("Pest Control")}
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        height: 52,
                                        borderWidth: 1,
                                        borderColor: COLORS.grey,
                                        marginRight: 4,
                                        borderRadius: 10
                                    }}>
                                        <Image source={require("../../assets/icons/pest_control.png")}
                                            style={{
                                                height: 36,
                                                width: 36,
                                                marginRight: 8
                                            }}
                                            resizeMode='contain'                            
                                        />
                                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>Pest Control</Text>

                            </TouchableOpacity>

                        </View>

                        <View style = {{
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <TouchableOpacity onPress={() => console.log("Security and technology")}
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        height: 52,
                                        borderWidth: 1,
                                        borderColor: COLORS.grey,
                                        marginRight: 4,
                                        borderRadius: 10
                                    }}>
                                        <Image source={require("../../assets/icons/security.png")}
                                            style={{
                                                height: 36,
                                                width: 36,
                                                marginRight: 8
                                            }}
                                            resizeMode='contain'                            
                                        />
                                        <Text  style={{fontSize: 12, fontWeight: 'bold'}}>Security and technology</Text>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => console.log("Handyman Services")}
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        height: 52,
                                        borderWidth: 1,
                                        borderColor: COLORS.grey,
                                        marginRight: 4,
                                        borderRadius: 10
                                    }}>
                                        <Image source={require("../../assets/icons/handyman.png")}
                                            style={{
                                                height: 36,
                                                width: 36,
                                                marginRight: 8
                                            }}
                                            resizeMode='contain'                            
                                        />
                                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>Handyman Services</Text>

                            </TouchableOpacity>

                        </View>
                        
                        <View style = {{
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <TouchableOpacity onPress={() => console.log("Moving and Storage")}
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        height: 52,
                                        borderWidth: 1,
                                        borderColor: COLORS.grey,
                                        marginRight: 4,
                                        borderRadius: 10
                                    }}>
                                        <Image source={require("../../assets/icons/moving.png")}
                                            style={{
                                                height: 36,
                                                width: 36,
                                                marginRight: 8
                                            }}
                                            resizeMode='contain'                            
                                        />
                                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>Moving and Storage</Text>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => console.log("Speciality services")}
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        height: 52,
                                        borderWidth: 1,
                                        borderColor: COLORS.grey,
                                        marginRight: 4,
                                        borderRadius: 10
                                    }}>
                                        <Image source={require("../../assets/icons/speciality.png")}
                                            style={{
                                                height: 36,
                                                width: 36,
                                                marginRight: 8
                                            }}
                                            resizeMode='contain'                            
                                        />
                                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>Speciality services</Text>

                            </TouchableOpacity>

                        </View>

                           
                        
                    </View>
                </View>

                
               
                    {/* <View style ={{flex:1}}>
                        <Image style ={{width:72, height: 72, justifyContent: 'center', alignItems: 'center'}} source={require("../../assets/icons/maintenance_and_repairs.png")}/>
                        <Text style={{fontSize: 12, fontWeight: 'bold'}}>{categories[0].category_name}</Text>
                                
                    </View> */}

                    {/* <Pressable onPress={()=>console.log("Maintenance and Repairs")}>
                        <View style={{ borderColor: COLORS.primary, margin:12, flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Image source={require("../../assets/icons/cleaning_services.png")}
                                style={{
                                    height:72,
                                    width:72,
                                }}
                            />
                            <Text>Cleaning Services</Text>
                        </View>
                    </Pressable> */}
                
                   
             

                
            </ScrollView>
        </SafeAreaView>
    )

   
}

