import { Optional } from "@prisma/client/runtime/library";
import { IUserRepository } from "../../../infra/interfaces/user-repository";
import { PayloadError } from "../../../main/config/errors/payload-error";
import { IEncryptGenerateHash } from "../../interfaces/encrypt/generateHash-interface";
import { ICreateUserUseCase } from "../../interfaces/users/create-interface";

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private encryptService: IEncryptGenerateHash
  ) {}

  async execute(
    data: Omit<IUsers, "id_user">
  ): Promise<Omit<IUsers, "password">> {
    const { password, ...rest } = data;

    const emailExists = await this.userRepository.loadByEmail(rest.email);
    if (emailExists) throw new PayloadError("Email already exists");

    const hashedPassword = await this.encryptService.genHash(password);

    const createUser: Optional<IUsers, "password"> =
      await this.userRepository.create({
        ...data,
        password: hashedPassword,
      });

    delete createUser.password;

    return createUser;
  }
}
