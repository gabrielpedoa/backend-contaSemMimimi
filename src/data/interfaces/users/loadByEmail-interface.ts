export interface ILoadUserByEmailUseCase {
  execute(email: string): Promise<IUsers | null>;
}
