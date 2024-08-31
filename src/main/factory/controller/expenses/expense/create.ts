import { CreateController } from "../../../../../presentational/controllers/createController";
import { SchemaValidator } from "../../../../../presentational/helpers/schemaValidator";
import { createExpenseSchema } from "../../../../../presentational/validation/expenses/expense-schema";
import { createExpenseUseCaseFactory } from "../../../usecase/expenses/expense/create";

export function createExpenseUseCaseControllerFactory() {
  const schema = new SchemaValidator(createExpenseSchema);
  return new CreateController(createExpenseUseCaseFactory(), schema);
}
