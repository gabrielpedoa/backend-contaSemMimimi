export interface ILoadUserByIdUseCase {
  execute(id: number): Promise<IUsers | null>;
}
