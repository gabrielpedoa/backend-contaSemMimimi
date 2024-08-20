import { LoadByIdUserUseCase } from "../../../../data/usecases/users/loadById";
import { UsersRepository } from "../../../../infra/repositories/users";

export function loadByIdUserUseCaseFactory() {
  return new LoadByIdUserUseCase(new UsersRepository());
}
