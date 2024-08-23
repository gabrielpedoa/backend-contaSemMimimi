import { Optional } from "@prisma/client/runtime/library";
import { IUserRepository } from "../../../infra/interfaces/user.repository.interface";
import { NotFoundError } from "../../../main/config/errors/notFound-error";
import { IUpdateUserUseCase } from "../../interfaces/users/update-interface";
import { UserEntity } from "../../../domain/entities/user.entity";

export class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(data: IUsers): Promise<Omit<IUsers, "password">> {
    const { id_user, ...rest } = data;
    const userExists = await this.userRepository.loadById(Number(id_user));

    if (!userExists) throw new NotFoundError("User not found");

    const userEntity = new UserEntity({
      id_user: userExists.id_user,
      ...rest,
    });
    
    await this.userRepository.update(userEntity.getUserEntity);

    const user = await this.userRepository.loadById(Number(id_user));

    if (!user) {
      throw new NotFoundError("User not found after update");
    }

    const { password, ...restUser } = user;

    return restUser;
  }
}
