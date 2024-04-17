import axios from "axios";

const backendBaseURL = axios.create({
  baseURL: "https://pontusnorup.se",
});

export { backendBaseURL };
