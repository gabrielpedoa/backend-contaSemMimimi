export interface ILoadAllUsersUseCase {
  execute(): Promise<IUsers[]>;
}
