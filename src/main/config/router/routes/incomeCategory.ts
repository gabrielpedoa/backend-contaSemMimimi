import { Router } from "express";
import authMiddleware from "../../../middleware/authMiddleware";
import expressAdapter from "../../adapter/expressAdapter";
import {
  createIncomeCategoryUseCaseControllerFactory,
  deleteIncomeCategoryUseCaseControllerFactory,
  loadAllIncomeCategoryUseCaseControllerFactory,
  loadByIdIncomeCategoryUseCaseControllerFactory,
  updateIncomeCategoryUseCaseControllerFactory,
} from "../../../factory/controller/incomes/category";

export default async (router: Router) => {
  router.get(
    "/income-category/list",
    authMiddleware,
    expressAdapter(loadAllIncomeCategoryUseCaseControllerFactory())
  );

  router.get(
    "/income-category/get/:id",
    authMiddleware,
    expressAdapter(loadByIdIncomeCategoryUseCaseControllerFactory())
  );

  router.post(
    "/income-category/create",
    authMiddleware,
    expressAdapter(createIncomeCategoryUseCaseControllerFactory())
  );

  router.put(
    "/income-category/update/:id_category",
    authMiddleware,
    expressAdapter(updateIncomeCategoryUseCaseControllerFactory())
  );

  router.put(
    "/income-category/delete/:id",
    authMiddleware,
    expressAdapter(deleteIncomeCategoryUseCaseControllerFactory())
  );
};
