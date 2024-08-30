import { UpdateController } from "../../../../presentational/controllers/updateController";
import { SchemaValidator } from "../../../../presentational/helpers/schemaValidator";
import { updateUserSchema } from "../../../../presentational/validation/user-schema";
import { updateUserUseCaseFactory } from "../../usecase/users/update";

export function updateUserUseCaseControllerFactory() {
  const validateSchema = new SchemaValidator(updateUserSchema);
  return new UpdateController(updateUserUseCaseFactory(), validateSchema);
}
