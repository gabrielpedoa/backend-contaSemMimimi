export interface ILoadUserByEmailUseCase {
  execute(email: string): Promise<Omit<IUsers, "password"> | null>;
}
