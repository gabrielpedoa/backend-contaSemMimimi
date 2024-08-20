import { IUserRepository } from "../../../infra/interfaces/user-repository";
import { NotFoundError } from "../../../main/config/errors/notFound-error";
import { ILoadUserByIdUseCase } from "../../interfaces/users/loadById-interface";

export class LoadByIdUserUseCase implements ILoadUserByIdUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(id: number): Promise<IUsers | null> {
    const user = await this.userRepository.loadById(id);
    if (!user) throw new NotFoundError("User doesn't exists!");

    return user;
  }
}
