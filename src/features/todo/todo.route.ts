import { Router } from "express";
import { todoController } from "./todo.controller";

const router = Router();

// routes
router.post("/", todoController.create);

export default router;
