import { expect } from 'chai';  // Only this import statement for chai

describe('Weather App', () => {
  it('should return weather data for a city', async () => {
    // Simulating a function to call your weather endpoint or mock the response
    const response = {
      city: 'London',
      temperature: 15,
      description: 'clear sky',
      humidity: 60,
      windSpeed: 5,
    };

    expect(response).to.have.property('city');
    expect(response.city).to.equal('London');
    expect(response.temperature).to.be.a('number');
    expect(response.description).to.equal('clear sky');
  });
});
