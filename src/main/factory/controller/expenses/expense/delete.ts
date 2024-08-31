import { DeleteController } from "../../../../../presentational/controllers/deleteController";
import { deleteExpenseUseCaseFactory } from "../../../usecase/expenses/expense/delete";

export function deleteExpenseUseCaseControllerFactory() {
  return new DeleteController(deleteExpenseUseCaseFactory());
}
