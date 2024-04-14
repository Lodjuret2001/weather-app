import axios from "axios";

const backendBaseURL = axios.create({
  baseURL: "http://localhost:3000",
});

export { backendBaseURL };
