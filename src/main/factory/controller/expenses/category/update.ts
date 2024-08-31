import { UpdateController } from "../../../../../presentational/controllers/updateController";
import { SchemaValidator } from "../../../../../presentational/helpers/schemaValidator";
import { updateExpenseCategorySchema } from "../../../../../presentational/validation/expenses/category-schema";
import { updateExpenseCategoryUseCaseFactory } from "../../../usecase/expenses/category/update";

export function updateExpenseCategoryUseCaseControllerFactory() {
  const schemaValidator = new SchemaValidator(updateExpenseCategorySchema);
  return new UpdateController(
    updateExpenseCategoryUseCaseFactory(),
    schemaValidator
  );
}
