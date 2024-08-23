import { LoadAllController } from "../../../../presentational/controllers/loadAllController";
import { loadAllUserUseCaseFactory } from "../../usecase/users/loadAll";

export function loadAllUsersUseCaseControllerFactory() {
  return new LoadAllController(loadAllUserUseCaseFactory());
}
