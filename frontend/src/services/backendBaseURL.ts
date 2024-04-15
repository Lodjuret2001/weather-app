import axios from "axios";

const backendBaseURL = axios.create({
  baseURL: "https://pixlmedia.se",
});

export { backendBaseURL };
