import bcrypt from "bcryptjs";
import { pool } from "../../config/db";

async function create(payload: Record<string, unknown>) {
  const { name, role, email, password, age, phone, address } = payload;

  const hashedPass = await bcrypt.hash(password as string, 10);

  return await pool.query(
    `INSERT INTO users(name, role, email, password, age, phone, address) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [name, role, email, hashedPass, age, phone, address]
  );
}

async function getAll() {
  return await pool.query(`SELECT * FROM users`);
}

async function getSingle(id: string) {
  return await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
}

async function update(id: string, payload: Record<string, unknown>) {
  const { age, phone, address } = payload;

  return await pool.query(
    `UPDATE users SET age=$1, phone=$2, address=$3 WHERE id=$4 RETURNING *`,
    [age, phone, address, id]
  );
}

async function deleteUser(id: string) {
  return await pool.query(`DELETE FROM users WHERE id = $1`, [id]);
}

export const userService = {
  create,
  getAll,
  getSingle,
  update,
  deleteUser,
};
