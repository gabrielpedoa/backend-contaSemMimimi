import { LoadByIdController } from "../../../../../presentational/controllers/loadByIdController";
import { loadByIdExpenseCategoryUseCaseFactory } from "../../../usecase/expenses/category/loadById";

export function loadByIdExpenseCategoryUseCaseControllerFactory() {
  return new LoadByIdController(loadByIdExpenseCategoryUseCaseFactory());
}
