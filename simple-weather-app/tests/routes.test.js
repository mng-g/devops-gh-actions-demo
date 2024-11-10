const request = require('supertest')
const app = require('../index')  // Import app directly

describe('Simple Weather App Endpoints', () => {
  it('should load the main page on GET /', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.text).toContain('<title>Simple Weather App</title>')
  })
})
