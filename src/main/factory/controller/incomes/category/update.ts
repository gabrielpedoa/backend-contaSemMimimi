import { UpdateController } from "../../../../../presentational/controllers/updateController";
import { SchemaValidator } from "../../../../../presentational/helpers/schemaValidator";
import { updateIncomeSchema } from "../../../../../presentational/validation/incomes/income-schema";
import { updateIncomeCategoryUseCaseFactory } from "../../../usecase/incomes/category/update";

export function updateIncomeCategoryUseCaseControllerFactory() {
  const schema = new SchemaValidator(updateIncomeSchema);
  return new UpdateController(updateIncomeCategoryUseCaseFactory(), schema);
}
