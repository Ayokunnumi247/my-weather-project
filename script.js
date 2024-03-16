function showWeather(response) {
  let searchcityElement = document.querySelector("#heading");
  searchcityElement.innerHTML = response.data.city;
  let tempElement = document.querySelector("#current-temperature");
  tempElement.innerHTML = Math.round(response.data.temperature.current);
}

function enterCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#search-city");
  let city = cityElement.value;
  let ApiKey = "8e4efa33a280aof6c33fe6a0t3ab54ec";
  let ApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${ApiKey}&units=metric`;
  axios.get(ApiUrl).then(showWeather);
}

let cityForm = document.querySelector("#searching");
cityForm.addEventListener("submit", enterCity);

let date = document.querySelector("#days");
let currentTime = new Date();
let Day = currentTime.getDay();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
hours = hours < 10 ? `0${hours}` : hours;
minutes = minutes < 10 ? `0${minutes}` : minutes;

let DayChange = weekDays[Day];
date.innerHTML = `${DayChange} ${hours}:${minutes}`;
