import { CreateController } from "../../../../../presentational/controllers/createController";
import { SchemaValidator } from "../../../../../presentational/helpers/schemaValidator";
import { createIncomeSchema } from "../../../../../presentational/validation/incomes/income-schema";
import { createIncomeUseCaseFactory } from "../../../usecase/incomes/income/create";

export function createIncomeUseCaseControllerFactory() {
  const schema = new SchemaValidator(createIncomeSchema);
  return new CreateController(createIncomeUseCaseFactory(), schema);
}
