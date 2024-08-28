import { AuthUseCase } from "../../../../data/usecases/auth/auth";
import { Encrypter } from "../../../../data/utils/encrypt";
import { JwtService } from "../../../../data/utils/jwt";
import { UsersRepository } from "../../../../infra/repositories/users";

export function authUseCaseFactory() {
  const user = new UsersRepository();
  const jwt = new JwtService();
  const encrypt = new Encrypter();
  return new AuthUseCase(user, jwt, encrypt);
}
