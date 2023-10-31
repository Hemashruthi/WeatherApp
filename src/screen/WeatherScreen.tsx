import React, { useContext, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { WeatherContext } from "../hooks/useContext";
import WeatherDetails from "../component/WeatherDetails";

const WeatherScreen = () => {
  const { weatherData } = useContext(WeatherContext);
  console.log(weatherData);
  const currentDate = new Date();
  const day = currentDate.getDate();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDay = daysOfWeek[currentDate.getDay()];
  const currentMonth = monthNames[currentDate.getMonth()];
  const KTemp = weatherData.main.temp;
  return (
    <View style={styles.container}>
      <Text style={styles.loc}>
        <Entypo name="location-pin" size={24} color="black" />
        {weatherData.name}, {weatherData.sys.country}
      </Text>
      <Text style={styles.date}>
        {currentDay} - {day} {currentMonth}
      </Text>
      <View style={styles.center}>
        <View style={styles.imgDes}>
          <Image
            style={styles.img}
            source={{
              uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
            }}
          />
          <Text style={styles.text}>{weatherData.weather[0].description}</Text>
        </View>
        <View style={styles.tempDeg}>
          <Text style={styles.temp}>{(KTemp - 275.15).toFixed(0)}</Text>
          <Text style={styles.deg}>°</Text>
        </View>
      </View>
      <WeatherDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },

  loc: {
    marginTop: 60,
    fontSize: 25,
    fontFamily: "Raleway",
    marginHorizontal: 13,
  },
  date: {
    fontSize: 15,
    marginHorizontal: 13,
    marginVertical: 6,
    color: "grey",
  },
  imgDes: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  center: {
    marginTop: 24,
    alignItems: "center",
    justifyContent: "space-evenly",
    // backgroundColor:"rgba(0,0,0, 0.1)",
    marginHorizontal: 66,
    borderRadius: 25,
  },
  temp: {
    fontSize: 205,
    fontWeight: "100",
    marginTop: -40,
    letterSpacing: -15,
  },
  tempDeg: {
    flexDirection: "row",
  },
  deg: {
    fontSize: 105,
    fontWeight: "100",
    marginTop: -30,
  },

  text: {
    fontSize: 20,
  },
  img: {
    alignSelf: "flex-start",
    width: 100,
    height: 100,
  },
});

export default WeatherScreen;
