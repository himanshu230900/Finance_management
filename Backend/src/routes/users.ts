import { Router } from "express";
import * as userController from "../controllers/userController";
import { authenticateUser } from "../middleware/auth";

const router = Router();

router.use(authenticateUser);
router.get("/profile", userController.getUserProfile);
router.patch("/profile", userController.updateUserProfile);

export default router;
