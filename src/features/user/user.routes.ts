import { Router } from "express";
import { createUser, userController } from "./user.controller";

const router = Router();

// create a new user
router.post("/create", createUser);

// get all users
router.get("/", userController.getAll);

// get a single user
router.get("/:id", userController.getSingle);

export default router;
