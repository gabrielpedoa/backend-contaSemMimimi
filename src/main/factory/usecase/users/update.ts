import { UpdateUserUseCase } from "../../../../data/usecases/users/update";
import { UsersRepository } from "../../../../infra/repositories/users";

export function updateUserUseCaseFactory() {
  return new UpdateUserUseCase(new UsersRepository());
}
