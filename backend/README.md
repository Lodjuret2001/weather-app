## Backend Server Setup Guide

Welcome to the backend server setup guide for the Weather App! This backend service provides the necessary functionality to fetch weather data from the OpenWeather API and serve it to the frontend.

### Installation Steps

1. **Create `.env` File**: Create a new file named `.env` in the root directory of the backend folder. This file will contain your environment variables. Add the following variables to the `.env` file:

    ```plaintext
    PORT=YOUR_PORT_NUMBER_HERE
    OPEN_WEATHER_APP_ID=YOUR_APP_ID_HERE
    ```

2. **Start the Server**: You can start the backend server by running:

    ```bash
    npm start
    ```

    This command will start the server and listen for incoming requests on the specified port (default is 3000).

### About the Backend Server

The backend server is a Node.js application written in TypeScript. It utilizes the following dependencies:

- **Express**: Express is a minimalist web framework for Node.js that simplifies the process of building web servers and APIs.
- **Axios**: Axios is a popular HTTP client for Node.js that simplifies making HTTP requests.

The server is set up to handle requests from the frontend of the Weather App and fetch weather data from the OpenWeather API using the provided API key. It follows best practices for error handling, routing, and middleware usage.

That's it! You now have the backend server set up and ready to serve weather data to the frontend of the Weather App. Happy coding!