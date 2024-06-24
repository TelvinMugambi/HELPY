import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../constants/color';
import Button from '../../components/Button';
import React, { useState } from 'react'

export default function BookingUpcoming() {
    const [hasUpcomingTask, setHasUpcomingTask] = useState(false);
    const [number, setNumber]= useState(0)

    const handleButtonClick = () => {
        //Implement backend to check
        setHasUpcomingTask(true);
        setNumber(number+1)
    };

    
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white}}>
            <View>
                {hasUpcomingTask? 
                    <View>
                        <Text>You have an Upcoming Task</Text>
                    </View>
                    :
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                        <Ionicons name="clipboard-outline" size={100} style={{color:COLORS.secondary}}  />
                        <Text>No Upcoming Services.</Text>
                        <Text>Currently you do not have any upcoming Services.</Text>
                        <Text>Place and Track your services from here.</Text>
                        <Button
                            title="View all services"
                            filled
                            style={{
                                marginTop: 18,
                                marginBottom: 4,
                            }}
                            
                            onPress={() => console.log("Move to categories")}
                        
                        />
                    </View>}
            </View>        
            
        </View>
    )
}