import { NextFunction, Request, Response } from "express";
import { todoService } from "./todo.service";


async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const results = await todoService.create(req.body);

    res.status(201).json({
      success: true,
      message: "Data inserted successfully.",
      data: results.rows[0],
    });
  } catch (error) {
    next(error);
  }
}

export const todoController = {
  create,
};
