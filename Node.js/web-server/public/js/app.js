const weatherForm = document.querySelector("form");
const search = document.querySelector("#location");
let weatherInfo = document.querySelector("#weatherInfo");

console.log(weatherInfo.textContent);

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  weatherInfo.textContent = "Loading Weather information...";

  fetch(`/weather?address=${search.value}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      if (data.error) {
        weatherInfo.textContent = `${data.error}`;
      } else {
        weatherInfo.textContent = `The current temperature in ${data.placeName} is ${data.temperature}°C with ${data.weatherDescriptions.toLowerCase()} conditions and ${data.precip}% chance of precipitation.`;
      }
    })
    .catch((err) => {
      console.log(err);
      weatherInfo.textContent = "Error..!!";
    });

  search.value = "";
});
