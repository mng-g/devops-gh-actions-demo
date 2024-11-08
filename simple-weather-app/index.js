require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.WEATHER_API_KEY;

// Serve static files (CSS, JavaScript) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Set up body parsing for form submissions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the main landing page at "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to get weather data by city name
app.post('/getWeather', async (req, res) => {
  const city = req.body.city;

  try {
    const response = await axios.get(WEATHER_API_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });

    const weatherData = response.data;
    res.json({
      city: weatherData.name,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
      humidity: weatherData.main.humidity,
      windSpeed: weatherData.wind.speed,
    });
  } catch (error) {
    console.error('Error fetching weather data:', error.response?.data || error.message);
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Weather app running on http://localhost:${PORT}`);
});
