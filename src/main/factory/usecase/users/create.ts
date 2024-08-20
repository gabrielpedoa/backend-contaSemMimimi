import { CreateUserUseCase } from "../../../../data/usecases/users/create";
import { Encrypter } from "../../../../data/utils/encrypt";
import { UsersRepository } from "../../../../infra/repositories/users";

export function createUserUseCaseFactory() {
  return new CreateUserUseCase(new UsersRepository(), new Encrypter());
}
