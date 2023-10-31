import { StyleSheet, View, Text, Image } from "react-native";
import { WeatherContext } from "../hooks/useContext";
import React, { useContext, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";


const WeatherDetails = () => {
 
  const { weatherData } = useContext(WeatherContext);
  const KTemp = weatherData.main.feels_like;
  const getTempMessage = () => {
    switch (true) {
      case 200 <= weatherData.weather[0].id && weatherData.weather[0].id <= 299:
        return( <View style={styles.messageBox}>
        <Text style={styles.italicText}>
          Thunder and Lightning, it's like the end of the world
        </Text>
      </View>)
      case 300 <= weatherData.weather[0].id && weatherData.weather[0].id <= 399:
        return ( <View style={styles.messageBox}>
          <Text style={styles.italicText}>
          Drizzles offer a perfect time for relaxing walks.
          </Text>
        </View>)
      case 500 <= weatherData.weather[0].id && weatherData.weather[0].id <= 599:
        return ( <View style={styles.messageBox}>
          <Text style={styles.italicText}>
          Listen to the rhythm of the falling rain.
          </Text>
        </View>)
        case 600 <= weatherData.weather[0].id && weatherData.weather[0].id <= 699:
        return ( <View style={styles.messageBox}>
          <Text style={styles.italicText}>
            Do you wanna build a snowman <FontAwesome5 name="snowman" size={28} color="black" /> ?!
          </Text>
        </View>)
        case 700 <= weatherData.weather[0].id && weatherData.weather[0].id <= 799:
          return ( <View style={styles.messageBox}>
            <Text style={styles.italicText}>
            When the weather is good, everything feels paw-sible.
            </Text>
          </View>)
          case 800 === weatherData.weather[0].id:
            return ( <View style={styles.messageBox}>
              <Text style={styles.italicText}>
              No filter needed when the sky's already picture perfect.
              </Text>    
            </View>)
           case 801 === weatherData.weather[0].id:
            return ( <View style={styles.messageBox}>
              <Text style={styles.italicText}>
              Enjoying the beauty of nature's gray palette.
              </Text>    
            </View>)
            case 802 === weatherData.weather[0].id:
              return ( <View style={styles.messageBox}>
                <Text style={styles.italicText}>
                Just a little bit closer to the sky.
                </Text>    
              </View>)
              case 803 === weatherData.weather[0].id:
                return ( <View style={styles.messageBox}>
                  <Text style={styles.italicText}>
                  Cloud watching is my kind of meditation.
                  </Text>    
                </View>)
            case 804 === weatherData.weather[0].id:
              return ( <View style={styles.messageBox}>
                <Text style={styles.italicText}>
                Let the clouds inspire your imagination.
                </Text>    
              </View>)
      default:
        return ( <View style={styles.messageBox}>
          <Text style={styles.italicText}>
          Lost in the beauty of the skies.
          </Text>
        </View>)
    }
  }
  return (
    <View style={styles.container}>
  <View style={styles.info}>
    <View style={styles.row}>
      <View style={[styles.box, {backgroundColor: "#d1f1f9"}]}>
        <Text>
          <FontAwesome5 name="temperature-high" size={28} color="black" /></Text>
          <Text style={styles.text}>
          {(KTemp - 275.15).toFixed(2)}°
        </Text>
        <Text style={styles.text}>Feels-Like</Text>
      </View>
      <View style={[styles.box, {backgroundColor: "#d4e2d4"}]}>
      <Text>
          <MaterialCommunityIcons
            name="weather-windy"
            size={28}
            color="black"
          />{" "}</Text>
           <Text style={styles.text}>
          {weatherData.wind.speed} km/hr
        </Text>
        <Text style={styles.text}>Wind</Text>
      </View>
      <View style={[styles.box, {backgroundColor: "#fff3da"}]}>
       <Text>
          <Entypo name="water" size={28} color="black" /></Text>
          <Text style={styles.text}>
          
          {weatherData.main.humidity}%
        </Text>
        <Text style={styles.text}>Humidity</Text>
      </View>
    </View>
    <View style={styles.row}>
      <View style={[styles.box, {backgroundColor: "#ffbfbf"}]}>
     <Text>
          <MaterialCommunityIcons
            name="weather-cloudy-arrow-right"
            size={28}
            color="black"
          /></Text>
           <Text style={styles.text}>
          {weatherData.main.pressure} atm
        </Text>
        <Text style={styles.text}>Pressure</Text>
      </View>
      <View style={[styles.box, {backgroundColor: "#d8b4"}]}>
     <Text>
     <FontAwesome5 name="water" size={24} color="black" /></Text>
           <Text style={styles.text}>
          {weatherData.main.sea_level} mm
        </Text>
        <Text style={styles.text}>Sea-Level</Text>
      </View>
    </View>
  </View>
  <Text style={styles.quote}>{getTempMessage()}</Text>
  <Text style={styles.quotations}>"</Text>
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    borderTopColor: "rgba(0,0,0, 0.1)",
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'column',
    marginTop: 12,
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    alignItems: 'center',
    borderRadius: 9,
    // backgroundColor: "rgba(0,0,0, 0.1)",
    padding: 10,
    margin: 5,
    width: 100,
    height:100,
  },
  text: {
    fontSize: 16,
    marginTop: 6,
  },
  quote: {
    marginTop: 42,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  messageBox: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: 'black', 
    flexWrap: 'wrap',
    maxWidth: 330,
    borderRadius: 10,
    padding: 15,
    margin: 5,
   borderTopWidth: 0.5,
   borderBottomWidth: 0.5,
   borderBottomRightRadius: 80,
  },
  italicText: {
    fontFamily: "Poppins-LightItalic",
    fontSize: 21,
  },
  quotations: {
    fontSize: 164,
    fontFamily: "Catamaran",
    marginLeft: 240,
    marginTop: -60,
  },

});


export default WeatherDetails;
