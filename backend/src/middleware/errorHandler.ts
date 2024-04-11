import { Request, Response, NextFunction } from "express";
import { isAxiosError } from "axios";

const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (isAxiosError(error)) {
    res
      .status(404)
      .send(
        `Axios error: ${error.response?.status}, ${error.message}, could not fetch the requested data...`
      );
    return next();
  } else {
    res.status(500).send(`
    <div style="display: flex; align-items: center; flex-direction: column;">
        <img src='https://www.dotcom-monitor.com/wp-content/uploads/sites/3/2010/08/do-not-touch.jpg'>
        <p>Sorry to inform you that something went wrong...</p>
    </div>`);
  }
};

export default errorHandler;
