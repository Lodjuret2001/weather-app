import openWeatherController from "../controllers/OpenWeatherController.js";
import express from "express";
const router = express.Router();
router.get("/api/openweather/forecast/data", openWeatherController.getWeatherData);
export { router as openWeatherRoutes };
