import { LoadAllController } from "../../../../../presentational/controllers/loadAllController";
import { loadAllExpenseCategoryUseCaseFactory } from "../../../usecase/expenses/category/loadAll";

export function loadAllExpenseCategoryUseCaseControllerFactory() {
  return new LoadAllController(loadAllExpenseCategoryUseCaseFactory());
}
