import { Router } from "express";
import auth from "../../middlewares/auth.middleware";
import { userController } from "./user.controller";

const router = Router();

// routes
router.post("/", userController.create);
router.get("/", auth("ADMIN"), userController.getAll);
router.get("/:id", auth("ADMIN", "USER"), userController.getSingle);
router.put("/:id", userController.update);
router.delete("/:id", userController.deleteUser);

export const userRoutes = router;