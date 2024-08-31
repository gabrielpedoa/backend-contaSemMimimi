import { Router } from "express";
import authMiddleware from "../../../middleware/authMiddleware";
import expressAdapter from "../../adapter/expressAdapter";
import {
  createExpenseCategoryUseCaseControllerFactory,
  deleteExpenseCategoryUseCaseControllerFactory,
  loadAllExpenseCategoryUseCaseControllerFactory,
  loadByIdExpenseCategoryUseCaseControllerFactory,
  updateExpenseCategoryUseCaseControllerFactory,
} from "../../../factory/controller/expenses/category";

export default async (router: Router) => {
  router.get(
    "/expense-category/list",
    authMiddleware,
    expressAdapter(loadAllExpenseCategoryUseCaseControllerFactory())
  );
  router.get(
    "/expense-category/get/:id",
    authMiddleware,
    expressAdapter(loadByIdExpenseCategoryUseCaseControllerFactory())
  );
  router.post(
    "/expense-category/create",
    authMiddleware,
    expressAdapter(createExpenseCategoryUseCaseControllerFactory())
  );
  router.put(
    "/expense-category/update/:id_category",
    authMiddleware,
    expressAdapter(updateExpenseCategoryUseCaseControllerFactory())
  );
  router.put(
    "/expense-category/delete/:id",
    authMiddleware,
    expressAdapter(deleteExpenseCategoryUseCaseControllerFactory())
  );
};
