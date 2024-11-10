document.getElementById('getWeatherBtn').addEventListener('click', async () => {
  const city = document.getElementById('cityInput').value
  const response = await fetch(`/api/weather?city=${city}`)
  const data = await response.json()

  const weatherResult = document.getElementById('weatherResult')
  if (data.main) {
    weatherResult.innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `
  } else {
    // weatherResult.innerHTML = `<p>${data.message}</p>`
    weatherResult.innerHTML = `<p style="color: red;">${data.message}</p>`
  }
})
