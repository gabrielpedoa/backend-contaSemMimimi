import { AuthController } from "../../../../presentational/controllers/authController";
import { authUseCaseFactory } from "../../usecase/auth/auth";

export function authUseCaseControllerFactory() {
  return new AuthController(authUseCaseFactory());
}
