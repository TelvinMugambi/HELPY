import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../constants/color';
import Button from '../../components/Button';
import React, { useState } from 'react'

export default function BookingDraft() {
    const [hasUpcomingTask, setHasUpcomingTask] = useState(false);  
    const handleButtonClick = () => {
        //Implement backend to check
        setHasUpcomingTask(true);
        
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
                        <MaterialIcons name="drafts" size={100} style={{color:COLORS.secondary}} />
                        <Text>No Drafts.</Text>
                        <Text>Currently you do not have any darfts.</Text>
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