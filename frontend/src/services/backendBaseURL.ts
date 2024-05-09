import axios from "axios";

const backendBaseURL = axios.create({
  baseURL: "https://weatherapi.pontusnorup.se",
});

export { backendBaseURL };
