const API_KEY = `6321d9b0eb1a0c907255a9c8ffe1607a`;
const loadWeatherAPI = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  displayWeather(data);
};
const displayWeather = (temp) => {
  const temperatureContainer = document.getElementById("temperature");
  temperatureContainer.innerText = temp.main.temp;
  document.getElementById("city").innerText = temp.name;
  document.getElementById("weather").innerText = temp.weather[0].main;
};
document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const searchFieldValue = searchField.value;
  loadWeatherAPI(searchFieldValue);
  searchField.value = "";
});
