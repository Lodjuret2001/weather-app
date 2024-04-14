import { Request, Response, NextFunction } from "express";

type ControllerFunction = (
  req: Request,
  res: Response,
) => Promise<void>;

const tryCatch =
  (controller: ControllerFunction) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res);
      return next();
    } catch (error) {
      return next(error);
    }
  };

export default tryCatch;
