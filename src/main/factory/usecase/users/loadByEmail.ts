import { LoadByEmailUserUseCase } from "../../../../data/usecases/users/loadByEmail";
import { UsersRepository } from "../../../../infra/repositories/users";

export function loadByEmailUserUseCaseFactory() {
  return new LoadByEmailUserUseCase(new UsersRepository());
}
