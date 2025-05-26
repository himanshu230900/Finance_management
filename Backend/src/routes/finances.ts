import { Router } from "express";
import * as financeController from "../controllers/financeController";
import { authenticateUser } from "../middleware/auth";

const router = Router();

// All routes are protected
router.use(authenticateUser);

router
  .route("/")
  .get(financeController.getAllTransactions)
  .post(financeController.createTransaction);

router
  .route("/:id")
  .get(financeController.getTransaction)
  .patch(financeController.updateTransaction)
  .delete(financeController.deleteTransaction);

export default router;
