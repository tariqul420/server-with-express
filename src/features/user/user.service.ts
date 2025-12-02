import bcrypt from "bcryptjs";
import { pool } from "../../config/db";

export const userService = {
  async create(payload: Record<string, unknown>) {
    const { name, role, email, password, age, phone, address } = payload;

    const hashedPass = await bcrypt.hash(password as string, 10);

    return await pool.query(
      `INSERT INTO users(name, role, email, password, age, phone, address) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [name, role, email, hashedPass, age, phone, address]
    );
  },

  async getAll() {
    return await pool.query(`SELECT * FROM users`);
  },

  async getSingle(id: number | string) {
    return await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
  },

  async delete(id: number | string) {
    return await pool.query(`DELETE FROM users WHERE id = $1`, [id]);
  },
};
