import { CreateController } from "../../../../../presentational/controllers/createController";
import { SchemaValidator } from "../../../../../presentational/helpers/schemaValidator";
import { createIncomeSchema } from "../../../../../presentational/validation/incomes/income-schema";
import { createIncomeCategoryUseCaseFactory } from "../../../usecase/incomes/category/create";

export function createIncomeCategoryUseCaseControllerFactory() {
  const schema = new SchemaValidator(createIncomeSchema);
  return new CreateController(createIncomeCategoryUseCaseFactory(), schema);
}
