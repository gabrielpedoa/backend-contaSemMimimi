import { IUserRepository } from "../../../infra/interfaces/user-repository";
import { NotFoundError } from "../../../main/config/errors/notFound-error";
import { IUpdateUserUseCase } from "../../interfaces/users/update-interface";

export class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(data: IUsers): Promise<IUsers> {
    const userExists = await this.userRepository.loadById(data.id_user);
    if (!userExists) throw new NotFoundError("User not found");

    await this.userRepository.update(data);
    const user = await this.userRepository.loadById(data.id_user);
    return user!;
  }
}
