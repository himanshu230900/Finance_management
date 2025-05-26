import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "../utils/errors";
import supabase from "../config/database";

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authenticateUser = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedError("Authentication required");
    }

    const token = authHeader.split(" ")[1];

    // Verify token using Supabase
    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) {
      throw new UnauthorizedError("Invalid or expired token");
    }

    // Attach user to request
    req.user = data.user;
    next();
  } catch (error) {
    next(error);
  }
};
