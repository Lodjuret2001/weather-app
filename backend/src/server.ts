import "dotenv/config.js";
import express, { Express } from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";
import { beforeLogger, afterLogger } from "./middleware/logger.js";
import { openWeatherRoutes } from "./routes/openWeatherRoutes.js";

const app: Express = express();
const PORT: number = parseInt(process.env.PORT ?? "3000");

app.use(express.json(), cors(), beforeLogger, openWeatherRoutes);

app.use(errorHandler, afterLogger);

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}...`);
});
