import { pool } from "../../config/db";

export const userService = {
  async getAll() {
    return await pool.query(`SELECT * FROM users`);
  },
};
