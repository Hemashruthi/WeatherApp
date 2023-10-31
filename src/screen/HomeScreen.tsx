import React, { useState, useEffect, useContext, useRef } from "react";
import MapView, {MAP_TYPES} from "react-native-maps";
import { StyleSheet, View, Text, Button, Alert, Pressable } from "react-native";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { WeatherContext } from "../hooks/useContext";


const Home = ({ navigation }) => {
  const mapViewRef = useRef(null);
  const [mapType, setMapType] = useState("standard")
  const {
    location,
    markerLocation,
    setMarkerLocation,
    weatherData,  
  } = useContext(WeatherContext);
 

  const handlePoiClick = (e) => {
    console.log(e);
  };

  const toggle = () => {
    if (mapType === 'standard') {
      setMapType(MAP_TYPES.HYBRID);
    } else {
      setMapType('standard');
    }
  };
 
const currentLoc = () => {
  if(location) {
    console.log(location.coords, 'c')
    setMarkerLocation(location.coords)

  }
  //  alert('Current Loc')
}
  

  return (
    <View>
      {location  && (
        <>
        <MapView
        provider={PROVIDER_GOOGLE}
        ref={mapViewRef}
          style={styles.map}
          onPress={(e) => handlePoiClick(e.nativeEvent)}
          onPoiClick={(e) => handlePoiClick(e.nativeEvent)}
          mapType={mapType}
         
         
          showsMyLocationButton={true}
          showsUserLocation={true}
        >
          
          <Marker
            coordinate={{
              latitude: markerLocation?.latitude || location.coords.latitude,
              longitude: markerLocation?.longitude || location.coords.latitude,
            }}
            draggable
            
            title="Marker"
            onDragEnd={(e) => {
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              )
              setMarkerLocation(e.nativeEvent.coordinate);
            }}
            onDragStart={() =>
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              )}
          />
        </MapView>
        </>
      )}
    <View style={styles.iconContainer}>
      <View style={styles.row}>
      <Text>
      <Entypo name="map" size={24} color="grey" onPress={() => toggle()} /> </Text>
      </View>
      <View style={styles.row}>
        <Text>
        <Ionicons name="location-sharp" size={34} color="grey" onPress={currentLoc} />
        </Text>
        </View>
    </View>
      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate("Weather", { weatherData: weatherData })
        }
      >
        <Text style={styles.text}>Show Weather</Text>
      </Pressable>
      {/* <Button title='Show weather' onPress={() => navigation.navigate('Weather')} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  iconContainer: {
    position: 'absolute',
    top: 52, 
    right: 13, 
    flexDirection: 'column',
  },
  row: {
    flexDirection: "row",
    backgroundColor: 'rgba(255,255,255, 0.8)',
    height: 37,
    width: 37,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
 
  text: {
    position: "absolute",
    fontSize: 22,
    color: "black",
    fontFamily: "Poppins-Regular",
  },
 
  button: {
    position: "absolute",
    top: 720,
    left: 90,
    right: 90,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255, 0.8)",
    
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
});

export default Home;
