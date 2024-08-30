import { CreateController } from "../../../../presentational/controllers/createController";
import { SchemaValidator } from "../../../../presentational/helpers/schemaValidator";
import { createUserSchema } from "../../../../presentational/validation/user-schema";
import { createUserUseCaseFactory } from "../../usecase/users/create";

export function createUserUseCaseControllerFactory() {
  return new CreateController(
    createUserUseCaseFactory(),
    new SchemaValidator(createUserSchema)
  );
}
