import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

// create a new user
router.post("/create", userController.create);

// get all users
router.get("/", userController.getAll);

// get a single user
router.get("/:id", userController.getSingle);

export default router;
