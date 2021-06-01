import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PinScreen from "../screens/PinScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import StartNameScreen from "../screens/StartNameScreen";
import StartBirthdayScreen from "../screens/StartBirthdayScreen";
import StartGenderScreen from "../screens/StartGenderScreen";
import StartWeightScreen from "../screens/StartWeightScreen";
import StartHeightScreen from "../screens/StartHeightScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import CalendarScreen from "../screens/CalendarScreen";

import MainNavigator from "./MainNavigator";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    //initialRouteName="CalendarScreen"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="PinScreen" component={PinScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen
      name="ForgotPasswordScreen"
      component={ForgotPasswordScreen}
    />
    <Stack.Screen name="StartNameScreen" component={StartNameScreen} />
    <Stack.Screen name="StartBirthdayScreen" component={StartBirthdayScreen} />
    <Stack.Screen name="StartGenderScreen" component={StartGenderScreen} />
    <Stack.Screen name="StartWeightScreen" component={StartWeightScreen} />
    <Stack.Screen name="StartHeightScreen" component={StartHeightScreen} />
    <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
    {/* <Stack.Screen name="CalendarScreen" component={CalendarScreen} /> */}
    <Stack.Screen name="MainNavigator" component={MainNavigator} />
  </Stack.Navigator>
);

export default AuthNavigator;
