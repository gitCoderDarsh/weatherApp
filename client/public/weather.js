let home = document.querySelector('.home');
let weatherInfo = document.querySelector('.weather-info');
let search = document.querySelector('.search-body');

// when the city name is entered and button is clicked, follow funciton takes place

let submit = document.querySelector(".get-info");

submit.addEventListener("click", (event) => {
  // default behavior of reloading page is prevented
  event.preventDefault();
  // city name is taken from the form
  let cityName = document.querySelector("#city-name").value;

  // axios is an HTTP client which manages requests to the server and responses from the server

  axios
    .post("/weather", { city: cityName }) //here /weather endpoint is accessed which handles the POST request
    .then((response) => {

      toggleVisibility(search, weatherInfo);
      displayWeather(response.data);
    })
    .catch((error) => { //display errors if any
      console.error("there was a problem with the request: ", error);
    });
});

// eventlistener for the return button

home.addEventListener('click', () => {
  toggleVisibility(weatherInfo, search);
})

// here in the parameter data is given above by the API and that response.data has everything that is needed by us 
// it is simply access below

function displayWeather(data){
  document.querySelector('.weather-city').textContent = data.name;
  document.querySelector('.temp').textContent = `${K2C(data.main.temp)}°C`;
  document.querySelector('.feels-like').textContent = `Feels like ${K2C(data.main.feels_like)}°C`;
  document.querySelector('.weather-type').textContent = data.weather[0].description;
  document.querySelector('.humidity').textContent = `Humidity: ${data.main.humidity}%`;
  document.querySelector('.wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

// a simple function to toggle visibility of 2 elements, when one is visible other isnt

function toggleVisibility(element1, element2){
  if(element1.style.display === 'none' || element1.style.display === ''){
    element1.style.display = 'flex'; // Show the first element
    element2.style.display = 'none'; // Hide the second element
  }else{
    element1.style.display = 'none'; // Hide the first element
    element2.style.display = 'flex'; // Show the second element
  }

}

// function to convert kelvin to celcius 

function K2C(temp){
  return (temp - 273.15).toFixed(2);
}