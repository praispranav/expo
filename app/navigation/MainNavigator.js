import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainServiceScreen from '../screens/MainServiceScreen';
import AppointmentScreen from "../screens/AppointmentScreen";


const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainServiceScreen" component={MainServiceScreen} />  
    <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} />
   {/*  <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} /> */}
  </Stack.Navigator>
);

export default MainNavigator;