export interface ICreateUserUseCase {
  execute: (data: Omit<IUsers, "id_user">) => Promise<IUsers>;
}
