import { DeleteController } from "../../../../../presentational/controllers/deleteController";
import { deleteExpenseCategoryUseCaseFactory } from "../../../usecase/expenses/category/delete";

export function deleteExpenseCategoryUseCaseControllerFactory() {
  return new DeleteController(deleteExpenseCategoryUseCaseFactory());
}
