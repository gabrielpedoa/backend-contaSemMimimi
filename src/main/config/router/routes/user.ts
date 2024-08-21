import { Router } from "express";
import expressAdapter from "../../../utils/expressAdapter";
import { createUserUseCaseControllerFactory } from "../../../factory/controller/users/create";

export default async (router: Router) => {
  router.post(
    "/users/create",
    expressAdapter(createUserUseCaseControllerFactory())
  );
};
