import { Optional } from "@prisma/client/runtime/library";
import { IUserRepository } from "../../../infra/interfaces/user.repository.interface";
import { ILoadAllUsersUseCase } from "../../interfaces/users/loadAll-interface";

export class LoadAllUsersUseCase implements ILoadAllUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<Omit<IUsers, "password">[]> {
    const users: Optional<IUsers[], "password"> =
      await this.userRepository.loadAll();

    const userResult: Omit<IUsers, "password">[] = users.map(
      ({ password, ...user }) => user
    );
    return userResult;
  }
}
