import axios from "axios";

const backendBaseURL = axios.create({
  baseURL: "https://weatherapp.pontusnorup.se/",
});

export { backendBaseURL };
