import { Router } from "express";
import authMiddleware from "../../../middleware/authMiddleware";
import expressAdapter from "../../adapter/expressAdapter";
import {
  createExpenseUseCaseControllerFactory,
  deleteExpenseUseCaseControllerFactory,
  loadAllExpenseUseCaseControllerFactory,
  loadByIdExpenseUseCaseControllerFactory,
  updateExpenseUseCaseControllerFactory,
} from "../../../factory/controller/expenses/expense";

export default async (router: Router) => {
  router.get(
    "/expense/list",
    authMiddleware,
    expressAdapter(loadAllExpenseUseCaseControllerFactory())
  );
  router.get(
    "/expense/get/:id",
    authMiddleware,
    expressAdapter(loadByIdExpenseUseCaseControllerFactory())
  );
  router.post(
    "/expense/create",
    authMiddleware,
    expressAdapter(createExpenseUseCaseControllerFactory())
  );
  router.put(
    "/expense/update/:id_expense",
    authMiddleware,
    expressAdapter(updateExpenseUseCaseControllerFactory())
  );
  router.put(
    "/expense/delete/:id",
    authMiddleware,
    expressAdapter(deleteExpenseUseCaseControllerFactory())
  );
};
