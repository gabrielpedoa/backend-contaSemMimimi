import { Optional } from "@prisma/client/runtime/library";
import { IUserRepository } from "../../../infra/interfaces/user.repository.interface";
import { PayloadError } from "../../../main/config/errors/payload-error";
import { IEncryptGenerateHash } from "../../interfaces/encrypt/generateHash-interface";
import { ICreateUserUseCase } from "../../interfaces/users/create-interface";
import { UserEntity } from "../../../domain/entities/user.entity";

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

    const hashedPassword = await this.encryptService.generateHash(password);

    const userEntity = new UserEntity({
      password: hashedPassword,
      ...rest,
    });

    const createUser: Optional<
      Omit<IUsers, "id_user">,
      "password"
    > = await this.userRepository.create(userEntity.getUserEntity);

    delete createUser.password;

    return createUser;
  }
}
