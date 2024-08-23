export interface ILoadAllUsersUseCase {
  execute(): Promise<Omit<IUsers, "password">[]>;
}
