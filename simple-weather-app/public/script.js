document.getElementById('weatherForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const city = document.getElementById('cityInput').value;
    const weatherResult = document.getElementById('weatherResult');
  
    try {
      const response = await fetch('/getWeather', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city }),
      });
  
      if (!response.ok) {
        throw new Error('Unable to fetch weather data');
      }
  
      const data = await response.json();
  
      // Display the weather information
      weatherResult.innerHTML = `
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>Temperature:</strong> ${data.temperature} °C</p>
        <p><strong>Description:</strong> ${data.description}</p>
        <p><strong>Humidity:</strong> ${data.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.windSpeed} m/s</p>
      `;
    } catch (error) {
      weatherResult.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
  });
  