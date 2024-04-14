# Weather App Frontend

Welcome to the Weather App frontend! This project provides a user interface for fetching and displaying a 5-day weather forecast for a specified city.

## Installation

1. **Configure Backend Base URL**: Before running the frontend, make sure to configure the `backendBaseURL.ts` file located in the `src/services` directory. Set the `baseURL` property to match the backend server setup you've configured.

2. **Start the App**: You can start the App by running:

   ```bash
   npm start dev
   ```

   This command will start the app at [localhost:5173](http://localhost5173).

## Main Features

- **Real-Time Weather Data**: Fetches real-time weather data from the OpenWeather API.
- **City Input Form**: Allows users to input the city for which they want to view the weather forecast.
- **Error Handling**: Provides error handling for cases where weather data retrieval fails.

## Explore the Source Code

I encourage you to explore the various folders and files within the `src` directory to gain a deeper understanding of the project's structure and functionality. Here's a brief overview of what you'll find:

- **Components**: Contains reusable React components used to build the user interface.
- **Hooks**: Houses custom React hooks for managing state and side effects.
- **Services**: Includes service modules for interacting with external APIs or backend servers.
- **Utils**: Contains utility functions used across the application.
- **Types**: Defines TypeScript types used throughout the project.
- **Assets**: Stores static assets such as images, videos, or fonts used in the application.

By examining these files, you'll gain insights into how different parts of the application are organized and how they interact with each other. Happy exploring!

That's it! You now have the frontend App set up and ready to go! Happy coding! 