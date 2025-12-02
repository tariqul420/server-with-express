import { Router } from "express";
import { createUser, getAllUser, getSingleUser } from "./user.controller";

const router = Router();

// create a new user
router.post("/create", createUser);

// get all users
router.get("/", getAllUser);

// get a single user
router.get("/:id", getSingleUser);

export default router;
