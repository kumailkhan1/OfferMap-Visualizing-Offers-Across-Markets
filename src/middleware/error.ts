import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

const InvalidPathHandler = async (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(error.status || 500).send({
    error: {
      message: error.message || "Route does not exist.",
      code: error.status || 500,
    },
  });
};

class HttpException extends Error {
  public status: number;
  public message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}
export { InvalidPathHandler, HttpException };
