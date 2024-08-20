import { LoadAllUsersUseCase } from "../../../../data/usecases/users/loadAll";
import { UsersRepository } from "../../../../infra/repositories/users";

export function loadAllUserUseCaseFactory() {
  return new LoadAllUsersUseCase(new UsersRepository());
}
