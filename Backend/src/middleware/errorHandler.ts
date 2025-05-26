import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/errors";
import { ENV } from "../config/env";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
      ...(ENV.NODE_ENV === "development" && { stack: err.stack }),
    });
  }

  // For unhandled errors
  console.error("Unhandled error:", err);

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
    ...(ENV.NODE_ENV === "development" && { stack: err.stack }),
  });
};

export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({
    status: "error",
    message: `Cannot find ${req.method} ${req.originalUrl}`,
  });
};
