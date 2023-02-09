const axios = require("axios");

const fetchWeatherData = async (latitude, longitude, placeName) => {
  const weatherApi = `http://api.weatherstack.com/current?access_key=105caddb559332dbed497a2d5ee11ee3&query=${latitude},${longitude}`;

  try {
    const data = await axios.get(weatherApi);

    // console.log(data.data.current);

    const temperature = data.data.current.temperature;
    const precip = data.data.current.precip;
    const weatherDescriptions = data.data.current.weather_descriptions[0];

    // console.log(
    //   `It is currently ${data.data.current.temperature} degrees out. There is ${data.data.current.precip}% chance of rain.`
    // );

    const output = {
      latitude:latitude,
      longitude:longitude,
      placeName:placeName,
      temperature:temperature,
      precip:precip,
      weatherDescriptions:weatherDescriptions
    }

    return output;
    
  } catch (error) {
    console.log(error.message);
  }
};

// fetchWeatherData();

const fetchMapData = async (address) => {
  const mapApi = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoieWFzaGhoMDgiLCJhIjoiY2xkd3dmb3Y2MGJobjNvcWoxbjRrNDljNSJ9.4sRB9z8GVn4OedF5uK4xNw&limit=1`;

  try {
    const data = await axios.get(mapApi);

    // console.log(data.data.features[0].center);

    const latitude = data.data.features[0].center[1];
    const longitude = data.data.features[0].center[0];
    const placeName = data.data.features[0].place_name;

    // console.log(
    //   `latitude ${latitude} and longitude ${longitude} of ${placeName}.`
    // );

    return fetchWeatherData(latitude, longitude, placeName);
  } catch (err) {
    console.log(err.message);
  }
};

// fetchMapData("frankfurt");

module.exports = fetchMapData;
