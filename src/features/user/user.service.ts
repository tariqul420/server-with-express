import { pool } from "../../config/db";

export const userService = {
  async getAll() {
    return await pool.query(`SELECT * FROM users`);
  },

  async getSingle(id: number | string) {
    return await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
  },
};
