import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import AuthNavigator from './app/navigation/AuthNavigator';
//import AppNavigator from './app/navigation/AppNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';


export default function App() {
  const [loaded] = useFonts({
    "Poppins-Light": require("./app/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./app/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./app/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("./app/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./app/fonts/Poppins-Bold.ttf"),
    "Roboto-Bold": require("./app/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("./app/fonts/Roboto-Black.ttf"),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer theme={NavigationTheme}>
    <AuthNavigator />
   
  </NavigationContainer>
  );
}