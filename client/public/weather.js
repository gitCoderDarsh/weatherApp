let submit = document.querySelector(".get-info");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  let cityName = document.querySelector("#city-name").value;
  console.log(cityName);
  axios
    .post("/weather", { city: cityName })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("there was a problem with the request: ", error);
    });
});
