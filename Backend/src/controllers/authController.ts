import { Request, Response, NextFunction } from "express";
import * as authService from "../services/authService";
import { CreateUserDto } from "../models/User";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userData: CreateUserDto = req.body;
    const result = await authService.register(userData);

    res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || "";
    await authService.logout(token);

    res.status(200).json({
      status: "success",
      message: "Successfully logged out",
    });
  } catch (error) {
    next(error);
  }
};
