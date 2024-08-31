import { Router } from "express";
import authMiddleware from "../../../middleware/authMiddleware";
import expressAdapter from "../../adapter/expressAdapter";
import {
  createIncomeUseCaseControllerFactory,
  deleteIncomeUseCaseControllerFactory,
  loadAllIncomeUseCaseControllerFactory,
  loadByIdIncomeUseCaseControllerFactory,
  updateIncomeUseCaseControllerFactory,
} from "../../../factory/controller/incomes/income";

export default async (router: Router) => {
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
