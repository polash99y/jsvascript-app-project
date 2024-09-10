const getWeather = () => {
  const city = document.getElementById("cityInput").value;
  const apiKey = "376447793be0b22172abf864746fa0e4";
  const apiUrl = `
    https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      const weatherTnfo = document.getElementById("weatherTnfo");
      const description = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      weatherTnfo.innerHTML = `
      <p>Description: ${description}</p>
      <h4>Temperature: ${temperature}&#8451</h4>
      <p>Humidity: ${humidity}%</p>
      <p>Wind speed: ${windSpeed}m/s</p>

      `;
    })
    .catch((error) => {
      console.error("Opps!,Sorry", error);
      document.getElementById("weatherTnfo").textContent = "City Not Found";
    });
};
