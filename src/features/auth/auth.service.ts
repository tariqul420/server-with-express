import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pool } from "../../config/db";
import config from "../../config/env";

export const authService = {
  async login(email: string, password: string) {
    const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [
      email,
    ]);

    if (result.rows.length === 0) return null;

    const user = result.rows[0];

    const match = await bcrypt.compare(password, user.password);

    if (!match) return false;

    const { name, email: userEmail, role } = user;

    const token = jwt.sign(
      { name, email: userEmail, role },
      config.jwtSecret as string,
      {
        expiresIn: "7d",
      }
    );

    return { token, user };
  },
};
