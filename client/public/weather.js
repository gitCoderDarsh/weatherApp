let home = document.querySelector('.home');
let weatherInfo = document.querySelector('.weather-info');
let search = document.querySelector('.search-body');

let submit = document.querySelector(".get-info");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let cityName = document.querySelector("#city-name").value;
  console.log(cityName);
  axios
    .post("/weather", { city: cityName })
    .then((response) => {

      toggleVisibility(search, weatherInfo);
      displayWeather(response.data);
    })
    .catch((error) => {
      console.error("there was a problem with the request: ", error);
    });
});

home.addEventListener('click', () => {
  toggleVisibility(weatherInfo, search);
})

function displayWeather(data){
  document.querySelector('.weather-city').textContent = data.name;
  document.querySelector('.temp').textContent = `${K2C(data.main.temp)}°C`;
  document.querySelector('.feels-like').textContent = `Feels like ${K2C(data.main.feels_like)}°C`;
  document.querySelector('.weather-type').textContent = data.weather[0].description;
  document.querySelector('.humidity').textContent = `Humidity: ${data.main.humidity}%`;
  document.querySelector('.wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

function toggleVisibility(element1, element2){
  if(element1.style.display === 'none' || element1.style.display === ''){
    element1.style.display = 'flex'; // Show the first element
    element2.style.display = 'none'; // Hide the second element
  }else{
    element1.style.display = 'none'; // Hide the first element
    element2.style.display = 'flex'; // Show the second element
  }

}

function K2C(temp){
  return (temp - 273.15).toFixed(2);
}