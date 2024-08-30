import { IUserRepository } from "../../../infra/interfaces/users/user-repository-interface";
import { NotFoundError } from "../../../main/config/errors/notFound-error";
import { ILoadUserByEmailUseCase } from "../../interfaces/users/loadByEmail-interface";

export class LoadByEmailUserUseCase implements ILoadUserByEmailUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(email: string): Promise<Omit<IUsers, "password"> | null> {
    const user = await this.userRepository.loadByEmail(email);
    if (!user) throw new NotFoundError("User not found");
    const { password, ...rest } = user;
    return rest;
  }
}
