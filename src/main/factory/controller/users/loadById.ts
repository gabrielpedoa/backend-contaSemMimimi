import { LoadByIdController } from "../../../../presentational/controllers/loadByIdController";
import { loadByIdUserUseCaseFactory } from "../../usecase/users/loadById";

export function loadByIdUserUseCaseControllerFactory() {
  return new LoadByIdController(loadByIdUserUseCaseFactory());
}
