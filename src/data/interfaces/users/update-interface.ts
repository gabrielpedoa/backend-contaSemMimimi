export interface IUpdateUserUseCase {
  execute(data: IUsers): Promise<Omit<IUsers, "password">>;
}
