import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();

// routes
router.post("/", userController.create);
router.get("/", userController.getAll);
router.get("/:id", userController.getSingle);
router.put(":/id", userController.update);
router.delete("/:id", userController.delete);



export default router;
