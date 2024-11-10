// index.js

import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.WEATHER_API_KEY;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/getWeather', async (req, res) => {
  const city = req.body.city;
  try {
    const response = await axios.get(WEATHER_API_URL, {
      params: { q: city, appid: API_KEY, units: 'metric' },
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
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Weather app running on http://localhost:${PORT}`);
  });
}

export { app };

