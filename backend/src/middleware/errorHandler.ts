import { Request, Response, NextFunction } from "express";
import { isAxiosError } from "axios";

const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statuscode: number = 500;
  let message: string = "Something went wrong...";
  if (isAxiosError(error)) {
    statuscode = error.status || 404;
    message = error.message === undefined ? message : error.message;
  }
  if (error instanceof Error) {
    statuscode = 400;
    message = error.message;
  }

  res.status(statuscode).send(message);
  return next();
};

export default errorHandler;
