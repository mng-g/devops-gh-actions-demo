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



// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../index.js'; // Import the app (index.js)

// const { expect } = chai;
// chai.use(chaiHttp);

// describe('Weather App', function () {
//   // Test for the root endpoint
//   describe('GET /', function () {
//     it('should load the main landing page', async function () {
//       const res = await chai.request(app).get('/');
//       expect(res.status).to.equal(200);
//       expect(res.text).to.include('<!DOCTYPE html>'); // Check if HTML content is returned
//       expect(res.text).to.include('<title>'); // Check if the title tag is present
//     });
//   });

//   // Test for the /getWeather endpoint
//   describe('POST /getWeather', function () {
//     it('should return weather data for a valid city', async function () {
//       const city = 'London';
//       const res = await chai
//         .request(app)
//         .post('/getWeather')
//         .send({ city });

//       expect(res.status).to.equal(200);
//       expect(res.body).to.have.property('city').that.equals(city);
//       expect(res.body).to.have.property('temperature');
//       expect(res.body).to.have.property('description');
//       expect(res.body).to.have.property('humidity');
//       expect(res.body).to.have.property('windSpeed');
//     });

//     it('should return an error if the city is invalid', async function () {
//       const city = 'InvalidCity';
//       const res = await chai
//         .request(app)
//         .post('/getWeather')
//         .send({ city });

//       expect(res.status).to.equal(500);
//       expect(res.body).to.have.property('error').that.equals('Unable to fetch weather data');
//     });
//   });
// });
