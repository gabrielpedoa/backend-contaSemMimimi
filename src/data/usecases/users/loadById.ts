import { IUserRepository } from "../../../infra/interfaces/user.repository.interface";
import { NotFoundError } from "../../../main/config/errors/notFound-error";
import { ILoadUserByIdUseCase } from "../../interfaces/users/loadById-interface";

export class LoadByIdUserUseCase implements ILoadUserByIdUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(id: number | string): Promise<Omit<IUsers, "password"> | null> {
    const user = await this.userRepository.loadById(Number(id));
    if (!user) throw new NotFoundError("User doesn't exists!");
    const { password, ...rest } = user;
    return rest;
  }
}
