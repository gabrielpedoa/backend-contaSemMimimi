export interface ILoadUserByIdUseCase {
  execute(id: number): Promise<Omit<IUsers, "password"> | null>;
}
