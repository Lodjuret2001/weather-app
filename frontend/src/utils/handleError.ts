import { isAxiosError } from "axios";

const handleError = (error: any): string => {
  let message = "Something went wrong when fetching the Weather Data...";
  if (isAxiosError(error)) {
    message =
      error.response?.data.message === undefined
        ? message
        : error.response.data.message;
  }
  if (error instanceof Error) {
    message = error.message;
  }

  return message;
};

export default handleError;
