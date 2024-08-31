import { LoadAllController } from "../../../../../presentational/controllers/loadAllController";
import { loadAllExpenseUseCaseFactory } from "../../../usecase/expenses/expense/loadAll";

export function loadAllExpenseUseCaseControllerFactory() {
  return new LoadAllController(loadAllExpenseUseCaseFactory());
}
