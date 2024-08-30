import { LoadAllController } from "../../../../../presentational/controllers/loadAllController";
import { loadAllIncomeUseCaseFactory } from "../../../usecase/incomes/income/loadAll";

export function loadAllIncomeUseCaseControllerFactory() {
  return new LoadAllController(loadAllIncomeUseCaseFactory());
}
