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
  } catch (error) {}
};
