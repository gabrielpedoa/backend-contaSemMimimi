import { CreateController } from "../../../../../presentational/controllers/createController";
import { SchemaValidator } from "../../../../../presentational/helpers/schemaValidator";
import { createIncomeCategorySchema } from "../../../../../presentational/validation/incomes/category-schema";
import { createIncomeCategoryUseCaseFactory } from "../../../usecase/incomes/category/create";

export function createIncomeCategoryUseCaseControllerFactory() {
  const schema = new SchemaValidator(createIncomeCategorySchema);
  return new CreateController(createIncomeCategoryUseCaseFactory(), schema);
}
