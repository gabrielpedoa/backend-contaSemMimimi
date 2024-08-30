import { LoadByIdController } from "../../../../../presentational/controllers/loadByIdController";
import { loadByIdIncomeCategoryUseCaseFactory } from "../../../usecase/incomes/category/loadById";

export function loadByIdIncomeCategoryUseCaseControllerFactory() {
  return new LoadByIdController(loadByIdIncomeCategoryUseCaseFactory());
}
