import { Request, Response, NextFunction } from "express";

type LoggerParams = {
  req: Request;
  res: Response;
  next: NextFunction;
};

const beforeLogger = ({ req, res, next }: LoggerParams) => {
  console.log("Incoming request...");
  return next();
};
const afterLogger = ({ req, res, next }: LoggerParams) => {
  console.log("Request handled...");
  return;
};

export { beforeLogger, afterLogger };
