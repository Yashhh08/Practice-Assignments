const axios = require("axios");

const weatherApi = `http://api.weatherstack.com/current?access_key=105caddb559332dbed497a2d5ee11ee3&query=19.2434433,72.8631425`;

const fetchData = async () => {
  try 
  {
    const data = await axios.get(weatherApi);

    console.log(data.data.current);
  } 
  catch (err) 
  {
    console.log(err);
  }
};

fetchData();
