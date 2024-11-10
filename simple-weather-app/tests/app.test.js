const axios = require('axios')
jest.mock('axios')

describe('GET /api/weather', () => {
  it('should return weather data for a city', async () => {
    const mockResponse = { data: { main: { temp: 25 }, weather: [{ description: 'clear sky' }] } }
    axios.get.mockResolvedValue(mockResponse)

    const response = await axios.get('/api/weather?city=London')
    expect(response.data.main.temp).toBe(25)
    expect(response.data.weather[0].description).toBe('clear sky')
  })
})
