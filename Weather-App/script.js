const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "509a2ee80bmsh956182cc63cdc52p13d4e2jsn41c7eb14c97d",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Delhi");

const weather = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      tempS.innerHTML = response.temp;
      feels_likeS.innerHTML = response.feels_like;
      humidityS.innerHTML = response.humidity;
      min_tempS.innerHTML = response.min_temp;
      max_tempS.innerHTML = response.max_temp;
      wind_speedS.innerHTML = response.wind_speed;
      wind_degreesS.innerHTML = response.wind_degrees;
      sunriseS.innerHTML = response.sunrise;
      sunsetS.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

weather("Shanghai");

const weather1 = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pctB.innerHTML = response.cloud_pct;
      tempB.innerHTML = response.temp;
      feels_likeB.innerHTML = response.feels_like;
      humidityB.innerHTML = response.humidity;
      min_tempB.innerHTML = response.min_temp;
      max_tempB.innerHTML = response.max_temp;
      wind_speedB.innerHTML = response.wind_speed;
      wind_degreesB.innerHTML = response.wind_degrees;
      sunriseB.innerHTML = response.sunrise;
      sunsetB.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

weather1("Boston");

const weather2 = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pctL.innerHTML = response.cloud_pct;
      tempL.innerHTML = response.temp;
      feels_likeL.innerHTML = response.feels_like;
      humidityL.innerHTML = response.humidity;
      min_tempL.innerHTML = response.min_temp;
      max_tempL.innerHTML = response.max_temp;
      wind_speedL.innerHTML = response.wind_speed;
      wind_degreesL.innerHTML = response.wind_degrees;
      sunriseL.innerHTML = response.sunrise;
      sunsetL.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

weather2("Lucknow");

const weather3 = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pctK.innerHTML = response.cloud_pct;
      tempK.innerHTML = response.temp;
      feels_likeK.innerHTML = response.feels_like;
      humidityK.innerHTML = response.humidity;
      min_tempK.innerHTML = response.min_temp;
      max_tempK.innerHTML = response.max_temp;
      wind_speedK.innerHTML = response.wind_speed;
      wind_degreesK.innerHTML = response.wind_degrees;
      sunriseK.innerHTML = response.sunrise;
      sunsetK.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

weather3("Kolkata");
