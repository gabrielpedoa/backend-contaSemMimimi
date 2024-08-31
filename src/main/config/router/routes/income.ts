import { Router } from "express";
import authMiddleware from "../../../middleware/authMiddleware";
import { loadAllIncomeCategoryUseCaseControllerFactory } from "../../../factory/controller/incomes/category/loadAll";
import expressAdapter from "../../adapter/expressAdapter";
import { loadByIdIncomeCategoryUseCaseControllerFactory } from "../../../factory/controller/incomes/category/loadById";
import { createIncomeCategoryUseCaseControllerFactory } from "../../../factory/controller/incomes/category/create";
import { updateIncomeCategoryUseCaseControllerFactory } from "../../../factory/controller/incomes/category/update";
import { deleteIncomeCategoryUseCaseControllerFactory } from "../../../factory/controller/incomes/category/delete";
import { loadAllIncomeUseCaseControllerFactory } from "../../../factory/controller/incomes/income/loadAll";
import { loadByIdIncomeUseCaseControllerFactory } from "../../../factory/controller/incomes/income/loadById";
import { createIncomeUseCaseControllerFactory } from "../../../factory/controller/incomes/income/create";
import { updateIncomeUseCaseControllerFactory } from "../../../factory/controller/incomes/income/update";
import { deleteIncomeUseCaseControllerFactory } from "../../../factory/controller/incomes/income/delete";

export default async (router: Router) => {
  /* income category bellow */

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

  /* income bellow */

  router.get(
    "/income/list",
    authMiddleware,
    expressAdapter(loadAllIncomeUseCaseControllerFactory())
  );

  router.get(
    "/income/get/:id",
    authMiddleware,
    expressAdapter(loadByIdIncomeUseCaseControllerFactory())
  );

  router.post(
    "/income/create",
    authMiddleware,
    expressAdapter(createIncomeUseCaseControllerFactory())
  );

  router.put(
    "/income/update/:id_income",
    authMiddleware,
    expressAdapter(updateIncomeUseCaseControllerFactory())
  );

  router.put(
    "/income/delete/:id",
    authMiddleware,
    expressAdapter(deleteIncomeUseCaseControllerFactory())
  );
};
