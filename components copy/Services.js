import { Text, View } from "react-native";
import Cleaning_services from "./Cleaning_services";
import Maintenance_and_repairs from "./Maintenance_and_repairs";
import Handyman_services from "./Handyman_services";
import Interior_design from "./Interior_design";
import Landscaping from "./Landscaping";
import Moving_and_storage from "./Moving_and_storage";
import Pest_control from "./Pest_control";
import Renovation from "./Renovation";
import Security_and_tech from "./Security_and_tech";

export default function Services(){
    return(
        <>
            <Maintenance_and_repairs />
            <Cleaning_services />
            <Handyman_services />
            <Interior_design />
            <Landscaping />
            <Moving_and_storage />
            <Pest_control />
            <Renovation />
            <Security_and_tech />
        </>
        
    )
}