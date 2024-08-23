import { Router } from "express";
import expressAdapter from "../../adapter/expressAdapter";
import { createUserUseCaseControllerFactory } from "../../../factory/controller/users/create";
import { loadAllUsersUseCaseControllerFactory } from "../../../factory/controller/users/loadAll";
import { loadByIdUserUseCaseControllerFactory } from "../../../factory/controller/users/loadById";
import { updateUserUseCaseControllerFactory } from "../../../factory/controller/users/update";
import { deleteUserUseCaseControllerFactory } from "../../../factory/controller/users/delete";

export default async (router: Router) => {
  router.get(
    "/users/list",
    expressAdapter(loadAllUsersUseCaseControllerFactory())
  );

  router.get(
    "/users/get/:id",
    expressAdapter(loadByIdUserUseCaseControllerFactory())
  );

  router.post(
    "/users/create",
    expressAdapter(createUserUseCaseControllerFactory())
  );

  router.put(
    "/users/update/:id_user",
    expressAdapter(updateUserUseCaseControllerFactory())
  );

  router.put(
    "/users/delete/:id",
    expressAdapter(deleteUserUseCaseControllerFactory())
  );
};
