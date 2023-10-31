import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/HomeScreen";
import WeatherScreen from "../screen/WeatherScreen";

const Stack = createStackNavigator();

export default function Page() {
  return (
       <Stack.Navigator>
        <Stack.Screen name="Map" component={Home}  />
        <Stack.Screen name="Weather" component={WeatherScreen}
        options={{
          headerShown: false,
        }} />
       </Stack.Navigator>

   

    // <View>
 
    //   <View>
    //   <Home />
    //   {/* <WeatherScreen /> */}
    //   </View>
    // </View>
  );
}