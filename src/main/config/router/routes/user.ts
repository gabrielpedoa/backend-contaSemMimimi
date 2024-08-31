import { Router } from "express";
import expressAdapter from "../../adapter/expressAdapter";
import authMiddleware from "../../../middleware/authMiddleware";
import {
  createUserUseCaseControllerFactory,
  deleteUserUseCaseControllerFactory,
  loadAllUsersUseCaseControllerFactory,
  loadByIdUserUseCaseControllerFactory,
  updateUserUseCaseControllerFactory,
} from "../../../factory/controller/users";

export default async (router: Router) => {
  router.get(
    "/users/list",
    authMiddleware,
    expressAdapter(loadAllUsersUseCaseControllerFactory())
  );

  router.get(
    "/users/get/:id",
    authMiddleware,
    expressAdapter(loadByIdUserUseCaseControllerFactory())
  );

  router.post(
    "/users/create",
    expressAdapter(createUserUseCaseControllerFactory())
  );

  router.put(
    "/users/update/:id_user",
    authMiddleware,
    expressAdapter(updateUserUseCaseControllerFactory())
  );

  router.put(
    "/users/delete/:id",
    authMiddleware,
    expressAdapter(deleteUserUseCaseControllerFactory())
  );
};
