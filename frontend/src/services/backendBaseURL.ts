import axios from "axios";

const backendBaseURL = axios.create({
  baseURL: "https://api.pontusnorup.se",
});

export { backendBaseURL };
