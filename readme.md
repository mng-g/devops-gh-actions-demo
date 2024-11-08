# 🌤 Simple Weather App

A minimal weather application built with Node.js that retrieves and displays weather data for any specified city. This app serves as a demo project to showcase the setup and automation of CI/CD pipelines using GitHub Actions.

## 🚀 Features

- **Real-Time Weather Data**: Fetches current weather information for any city, including temperature, humidity, description, and wind speed.
- **Beautiful Landing Page**: A clean, user-friendly interface to enter a city and view weather data.
- **GitHub Actions Demo**: Demonstrates how to set up automated workflows with GitHub Actions, including testing, linting, and deployment.

## 🛠️ Prerequisites

- **Node.js** and **npm** installed
- An **API Key** from [OpenWeather](https://openweathermap.org/api)

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mng-g/devops-gh-actions-demo
   cd simple-weather-app
   ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a .env file to store your OpenWeather API key:
    ```bash
    WEATHER_API_KEY=your_openweather_api_key_here
    ```
4. Start the server:
    ```bash
    node index.js
    ```
5. Open your browser and visit http://localhost:3000.

## 📂 Project Structure

- **`index.js`**: Main server file that serves the landing page and fetches weather data from OpenWeather API.
- **`public/`**: Contains static assets:
  - `index.html`: Main HTML file for the landing page
  - `style.css`: Styling for the landing page
  - `script.js`: Handles form submission and displays weather data on the page

## 📋 Usage

1. Enter a city name in the input field on the landing page.
2. Submit the form to retrieve the current weather data.
3. The app will display:
   - City name
   - Temperature (in Celsius)
   - Weather description (e.g., "clear sky")
   - Humidity percentage
   - Wind speed (m/s)

## 🧪 Testing with GitHub Actions

This repository includes a sample GitHub Actions workflow to automate testing and deployment:

- **Linting**: Ensures code quality and consistency.
- **Testing**: Verifies functionality with automated tests.
- **Deployment**: (optional) Deploys the app to a cloud service or platform like Heroku, AWS, etc.

The GitHub Actions workflow file can be found in `.github/workflows/ci.yml`. To activate it:

1. Fork the repository to your GitHub account.
2. Go to the "Actions" tab and enable workflows.
3. The workflow will run on every push and pull request.

## 📄 License

This project is licensed under the MIT License.

## 📬 Contact

For any questions or feedback, feel free to reach out at [mingazzini.michael@gmail.com].

---

Happy coding and enjoy the weather! ☀️🌧️
