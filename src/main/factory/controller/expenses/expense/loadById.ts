import { LoadByIdController } from "../../../../../presentational/controllers/loadByIdController";
import { loadByIdExpenseUseCaseFactory } from "../../../usecase/expenses/expense/loadById";

export function loadByIdExpenseUseCaseControllerFactory() {
  return new LoadByIdController(loadByIdExpenseUseCaseFactory());
}
