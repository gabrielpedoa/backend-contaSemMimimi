import { DeleteUserUseCase } from "../../../../data/usecases/users/delete";
import { UsersRepository } from "../../../../infra/repositories/users";

export function deleteUserUseCaseFactory() {
  return new DeleteUserUseCase(new UsersRepository());
}
