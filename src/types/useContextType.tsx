export type Weather ={
    latitude: any;
    longitude: any;
}
export type WeatherProviderState = {
    location: Weather | any; 
    setLocation: React.Dispatch<any>;
    markerLocation: Weather | any; 
    setMarkerLocation: React.Dispatch<any>;
    weatherData: any; 
    setWeatherData: React.Dispatch<any>;
    fetchWeather: any;
  };