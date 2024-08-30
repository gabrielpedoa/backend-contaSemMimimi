import { LoadAllController } from "../../../../../presentational/controllers/loadAllController";
import { loadAllIncomeCategoryUseCaseFactory } from "../../../usecase/incomes/category/loadAll";

export function loadAllIncomeCategoryUseCaseControllerFactory() {
  return new LoadAllController(loadAllIncomeCategoryUseCaseFactory());
}
