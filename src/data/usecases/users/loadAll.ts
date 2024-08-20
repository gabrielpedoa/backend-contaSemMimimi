import { IUserRepository } from "../../../infra/interfaces/user-repository";
import { ILoadAllUsersUseCase } from "../../interfaces/users/loadAll-interface";

export class LoadAllUsersUseCase implements ILoadAllUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<IUsers[]> {
    return await this.userRepository.loadAll();
  }
}
