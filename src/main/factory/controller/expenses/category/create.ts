import { CreateController } from "../../../../../presentational/controllers/createController";
import { SchemaValidator } from "../../../../../presentational/helpers/schemaValidator";
import { createExpenseCategorySchema } from "../../../../../presentational/validation/expenses/category-schema";
import { createExpenseCategoryUseCaseFactory } from "../../../usecase/expenses/category/create";

export function createExpenseCategoryUseCaseControllerFactory() {
  const schamaValidation = new SchemaValidator(createExpenseCategorySchema);
  return new CreateController(
    createExpenseCategoryUseCaseFactory(),
    schamaValidation
  );
}
