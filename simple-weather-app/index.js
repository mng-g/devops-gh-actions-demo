require('dotenv').config()

const express = require('express')
const axios = require('axios')
const path = require('path')

const app = express()
// const PORT = process.env.PORT || 3000
const WEATHER_API_KEY = process.env.WEATHER_API_KEY

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/weather', async (req, res) => {
  const city = req.query.city
  console.log('City:', city)
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
    )
    console.log('Weather data:', response.data)
    res.json(response.data)
  } catch (error) {
    console.error('Error fetching weather data:', error.message)
    res.status(500).json({ message: 'Error fetching weather data' })
  }
})

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`)
// })

module.exports = app  // Export the app without starting the server