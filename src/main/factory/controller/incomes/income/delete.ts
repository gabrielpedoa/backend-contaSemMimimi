import { DeleteController } from "../../../../../presentational/controllers/deleteController";
import { deleteIncomeUseCaseFactory } from "../../../usecase/incomes/income/delete";

export function deleteIncomeUseCaseControllerFactory() {
  return new DeleteController(deleteIncomeUseCaseFactory());
}
