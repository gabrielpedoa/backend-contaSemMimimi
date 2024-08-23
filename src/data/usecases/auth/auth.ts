import { IUserRepository } from "../../../infra/interfaces/user.repository.interface";
import { NotFoundError } from "../../../main/config/errors/notFound-error";
import { UnauthorizedError } from "../../../main/config/errors/unauthorized-error";
import { IEncryptCompareHash } from "../../interfaces/encrypt/compareHash-interface";
import { IJwtService } from "../../interfaces/jwt/generateToken";

export class AuthUseCase implements IAuthUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly jwtService: IJwtService,
    private readonly encrypter: IEncryptCompareHash
  ) {}

  public async execute(
    email: string,
    pass: string
  ): Promise<{ token: string; user: IUsers }> {
    let user = await this.userRepository.loadByEmail(email);

    if (!user) throw new NotFoundError("User not found");

    const passwordCompared = await this.encrypter.compare(
      pass,
      user?.password!
    );

    if (!passwordCompared) throw new UnauthorizedError("Invalid credentials");

    const { password, ...rest } = user;

    const token = await this.jwtService.generateToken(rest);
    return { token, user: rest };
  }
}
