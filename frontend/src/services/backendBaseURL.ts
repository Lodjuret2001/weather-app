import axios from "axios";

axios.create({
  baseURL: "http://localhost:3000",
});

export { axios as backendBaseURL };
