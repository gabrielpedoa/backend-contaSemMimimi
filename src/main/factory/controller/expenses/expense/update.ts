import { UpdateController } from "../../../../../presentational/controllers/updateController";
import { SchemaValidator } from "../../../../../presentational/helpers/schemaValidator";
import { updateExpenseSchema } from "../../../../../presentational/validation/expenses/expense-schema";
import { updateExpenseUseCaseFactory } from "../../../usecase/expenses/expense/update";

export function updateExpenseUseCaseControllerFactory() {
  const schema = new SchemaValidator(updateExpenseSchema);
  return new UpdateController(updateExpenseUseCaseFactory(), schema);
}
