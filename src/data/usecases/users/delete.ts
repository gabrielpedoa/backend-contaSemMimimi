import { IUserRepository } from "../../../infra/interfaces/user-repository";
import { NotFoundError } from "../../../main/config/errors/notFound-error";
import { IDeleteUserUseCase } from "../../interfaces/users/delete-interface";

export class DeleteUserUseCase implements IDeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  async execute(id: number): Promise<boolean> {
    const userExists = await this.userRepository.loadById(id);
    if (!userExists) throw new NotFoundError("User not found");
    return await this.userRepository.delete(id);
  }
}
