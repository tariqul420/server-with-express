import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";

export const userController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const results = await userService.create(req.body);

      res.status(201).json({
        success: true,
        message: "Data inserted successfully.",
        data: results.rows[0],
      });
    } catch (error) {
      next(error);
    }
  },

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const results = await userService.getAll();

      res.status(200).json({
        success: true,
        message: "Users retrieved successfully",
        data: results.rows,
      });
    } catch (error) {
      next(error);
    }
  },

  async getSingle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await userService.getSingle(id as string);

      if (result.rows.length === 0) {
        res.status(404).json({
          success: false,
          message: "User not found",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "User fetched successfully",
          data: result.rows[0],
        });
      }
    } catch (error) {
      next(error);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const result = await userService.update(id, req.body);

      if (result.rows.length === 0) {
        res.status(404).json({
          success: false,
          message: "User not found",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "User updated successfully",
          data: result.rows[0],
        });
      }
    } catch (error) {
      next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const result = await userService.delete(id);

      if (result.rowCount === 0) {
        res.status(404).json({
          success: false,
          message: "User not found",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "User deleted successfully",
          data: result.rows,
        });
      }
    } catch (error) {
      next(error);
    }
  },
};
