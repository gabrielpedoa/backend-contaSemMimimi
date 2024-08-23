export interface IJwtService {
  generateToken: (user: IUsers) => Promise<string>;
}
