import { pool } from "../../config/db";


async function create(payload: Record<string, unknown>) {
  const { user_id, title, description, due_date } = payload;

  return await pool.query(
    `INSERT INTO todos(user_id, title, description, due_date) VALUES($1, $2, $3, $4) RETURNING *`,
    [user_id, title, description, due_date]
  );
}

export const todoService = {
  create,
};