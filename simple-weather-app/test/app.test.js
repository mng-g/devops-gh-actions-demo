// test/app.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js'); // Adjusted to use require

const { expect } = chai;
chai.use(chaiHttp);

describe("Root Endpoint", function () {
  it("should load the main page", async function () {
    const res = await chai.request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.include("<!DOCTYPE html>");
    expect(res.text).to.include("<title>"); // Adjust if you know the actual title
  });
});
