import { UpdateController } from "../../../../../presentational/controllers/updateController";
import { SchemaValidator } from "../../../../../presentational/helpers/schemaValidator";
import { updateIncomeCategorySchema } from "../../../../../presentational/validation/incomes/category-schema";
import { updateIncomeCategoryUseCaseFactory } from "../../../usecase/incomes/category/update";

export function updateIncomeCategoryUseCaseControllerFactory() {
  const schema = new SchemaValidator(updateIncomeCategorySchema);
  return new UpdateController(updateIncomeCategoryUseCaseFactory(), schema);
}
