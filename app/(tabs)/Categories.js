import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../../constants/color';
import { Searchbar } from 'react-native-paper';
import { supabase } from '../../utils/supabase';
import { Session } from '@supabase/supabase-js'



export default function Categories() {
    const [searchQuery, setsearchQuery] = React.useState('')
    const [loading, setLoading] = useState(true)
    const [fetcherror, setFetcherror] = useState(null)
    const [services, setServices] = useState(null)

    

    useEffect(()=>{
        if (Session) getServices()
    }, [Session])

    async function getServices(){
        try {
            
            let { data: services, error } = await supabase
            .from('services')
            .select('service_name')

            if(services){
                setServices(services)
                setFetcherror(null)
            }

            if(error){
                setFetcherror("Could not fetch data")
                setServices(null)
                console.log(error)
            }

        } catch (error) {
            setFetcherror("Could not fetch data")
            setServices(null)
            console.log(error)
        }
    }

    return (

        
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }} >
            <View style={{padding: 8}}>
                <Searchbar
                placeholder="Search"
                onChangeText={setsearchQuery}
                value={searchQuery}
                />
            </View>
            <View>
                {fetcherror && (<View><Text>{fetcherror}</Text></View>)}
                {services && (
                    <View>
                        <Text></Text>
                        {services.map(service =>(<View><Text>{service.name}</Text></View>))}
                    </View>
                )}
            </View>
            
            
         </SafeAreaView>
    )
}