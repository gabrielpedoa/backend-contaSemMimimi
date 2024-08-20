export interface IUpdateUserUseCase {
  execute(data: IUsers): Promise<IUsers>;
}
