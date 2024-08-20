import { IUserRepository } from "../../../infra/interfaces/user-repository";
import { NotFoundError } from "../../../main/config/errors/notFound-error";
import { ILoadUserByEmailUseCase } from "../../interfaces/users/loadByEmail-interface";

export class LoadByEmailUserUseCase implements ILoadUserByEmailUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(email: string): Promise<IUsers | null> {
    const user = await this.userRepository.loadByEmail(email);
    if (!user) throw new NotFoundError("User not found");
    return user;
  }
}
