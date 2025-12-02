import { Router } from "express";
import { createUser, getSingleUser, userController } from "./user.controller";

const router = Router();

// create a new user
router.post("/create", createUser);

// get all users
router.get("/", userController.getAll);

// get a single user
router.get("/:id", getSingleUser);

export default router;
