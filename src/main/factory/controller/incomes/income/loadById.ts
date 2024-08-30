import { LoadByIdController } from "../../../../../presentational/controllers/loadByIdController";
import { loadByIdIncomeUseCaseFactory } from "../../../usecase/incomes/income/loadById";

export function loadByIdIncomeUseCaseControllerFactory() {
  return new LoadByIdController(loadByIdIncomeUseCaseFactory());
}
