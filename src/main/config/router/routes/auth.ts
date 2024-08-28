import { Router } from "express";
import expressAdapter from "../../adapter/expressAdapter";
import { authUseCaseControllerFactory } from "../../../factory/controller/auth/auth";

export default async (router: Router) => {
  router.post("/login", expressAdapter(authUseCaseControllerFactory()));
};
