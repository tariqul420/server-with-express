import { Router } from "express";
import { createUser } from "../controllers/user.controller";

const router = Router();

// create a new user
router.post("/create", createUser);

export default router;
