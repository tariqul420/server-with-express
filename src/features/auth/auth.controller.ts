import { NextFunction, Request, Response } from "express";
import { authService } from "./auth.service";

async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);

    res.status(200).json({
      success: true,
      message: "Login successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

export const authController = {
  login,
};
