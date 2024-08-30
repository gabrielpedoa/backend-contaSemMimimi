import { DeleteController } from "../../../../../presentational/controllers/deleteController";
import { deleteIncomeCategoryUseCaseFactory } from "../../../usecase/incomes/category/delete";

export function deleteIncomeCategoryUseCaseControllerFactory() {
  return new DeleteController(deleteIncomeCategoryUseCaseFactory());
}
