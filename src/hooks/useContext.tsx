import { createContext, useState, useEffect } from "react";
import * as Location from "expo-location";
import axios from "axios";
import { API_KEY } from "../../config";
import { Weather, WeatherProviderState } from "../types/useContextType";

export const WeatherContext = createContext<WeatherProviderState>(undefined);

const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [markerLocation, setMarkerLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          // setErrorMsg('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location, 'l');
        
        setLocation(location)
        fetchWeather(location.coords.latitude, location.coords.longitude);
      } catch (e) {
        console.error(e, "location error");
      }
    })();
  }, []);

  useEffect(() => {
    if (markerLocation) {
      fetchWeather(markerLocation.latitude, markerLocation.longitude);
    }
    console.log(markerLocation, 'm')
  }, [markerLocation]);

  async function fetchWeather(lat, lon) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      //console.log(response);
      //console.log(response.data)
      setWeatherData(response.data);
      //console.log(response.data.main.temp)
    } catch (e) {
      console.log(e, "fetchError");
    }
  }

  

  const contextType: WeatherProviderState = {
    location,
    setLocation,
    markerLocation,
    setMarkerLocation,
    weatherData,
    setWeatherData,
    fetchWeather,
  };

  return (
    <WeatherContext.Provider value={contextType}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
