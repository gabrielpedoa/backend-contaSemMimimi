import { DeleteController } from "../../../../presentational/controllers/deleteController";
import { deleteUserUseCaseFactory } from "../../usecase/users/delete";

export function deleteUserUseCaseControllerFactory() {
  return new DeleteController(deleteUserUseCaseFactory());
}
