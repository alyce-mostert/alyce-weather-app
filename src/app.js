function displayTemperature(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.city;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.temperature.current
  );
  document.querySelector("#conditions").innerHTML =
    response.data.condition.description;
  document.querySelector("#icon").innerHTML = response.data.condition.icon_url;
  document.querySelector("#feels-like").innerHTML = Math.round(
    response.data.temperature.feels_like
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#humidity").innerHTML =
    response.data.temperature.humidity;
}

let apiKey = "oe33c8e8f0dc27bd608235t719ad314c";
let units = "metric";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={Perth}&key=${apiKey}&units=${units}`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
