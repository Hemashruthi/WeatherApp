import { Stack } from "expo-router";
import WeatherProvider from "../hooks/useContext";
import { useFonts } from 'expo-font';
import React, { useState } from "react";
export default function RootLayout() {
  const [loaded] = useFonts({ 
    // 'Poppins-Light':  require('../../fonts/Poppins/Poppins-Thin.ttf'),
    'Poppins-Regular': require('../../fonts/Poppins/Poppins-Regular.ttf'),
    "Raleway": require('../../fonts/Raleway/static/Raleway-Bold.ttf'),
    "Poppins-LightItalic": require('../../fonts/Poppins/Poppins-LightItalic.ttf'),
    "Catamaran": require("../../fonts/Catamaran/static/Catamaran-Medium.ttf"),

  })
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded && !loaded) {
    return null;
  } else if (!fontsLoaded && loaded) {
    setFontsLoaded(true); 
  }
  return (
    <WeatherProvider>
      <Stack initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }} />
      </WeatherProvider>
      
  );
}