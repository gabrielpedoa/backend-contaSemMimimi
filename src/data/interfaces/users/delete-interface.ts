export interface IDeleteUserUseCase {
  execute(id: number): Promise<boolean>;
}
