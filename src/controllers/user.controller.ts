import { Request, Response } from "express";
import { pool } from "../config/db";

// create user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, age, phone, address } = req.body;

    const results = await pool.query(
      `INSERT INTO users(name, email, age, phone, address) VALUES($1, $2, $3, $4, $5) RETURNING *`,
      [name, email, age, phone, address]
    );

    res.status(201).json({
      success: true,
      message: "Data inserted successfully.",
      data: results.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

// get all users
export const getAllUser = async (req: Request, res: Response) => {
  try {
    const results = await pool.query(`SELECT * FROM users`);

    res.status(200).json({
      success: true,
      message: "Users retrieved successfully.",
      data: results.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};

// get a single user
export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await pool.query(`SELECT * FROM users WHERE ID = $1`, [id]);

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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      details: error,
    });
  }
};
