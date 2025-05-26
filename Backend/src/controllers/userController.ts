import { Request, Response, NextFunction } from "express";
import * as userService from "../services/userService";

interface AuthRequest extends Request {
  user?: { id: string };
}

export const getUserProfile = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ status: "error", message: "Unauthorized" });
      return;
    }

    const user = await userService.getUserProfile(userId);

    res.status(200).json({ status: "success", data: { user } });
  } catch (error) {
    next(error);
  }
};

export const updateUserProfile = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({
        status: "error",
        message: "Unauthorized",
      });
      return;
    }

    const updateData = req.body;
    const user = await userService.updateUserProfile(userId, updateData);

    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};
