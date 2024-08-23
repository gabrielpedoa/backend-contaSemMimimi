interface IAuthUseCase {
  execute: (
    email: string,
    pass: string
  ) => Promise<{ token: string; user: IUsers }>;
}
