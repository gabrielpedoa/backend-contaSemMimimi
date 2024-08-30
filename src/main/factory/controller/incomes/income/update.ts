import { UpdateController } from "../../../../../presentational/controllers/updateController";
import { SchemaValidator } from "../../../../../presentational/helpers/schemaValidator";
import { updateIncomeSchema } from "../../../../../presentational/validation/incomes/income-schema";
import { updateIncomeUseCaseFactory } from "../../../usecase/incomes/income/update";

export function updateIncomeUseCaseControllerFactory() {
  const schema = new SchemaValidator(updateIncomeSchema);
  return new UpdateController(updateIncomeUseCaseFactory(), schema);
}
