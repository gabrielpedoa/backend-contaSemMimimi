import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const key = process.env.JWT_SECRET!;

export class JwtService {
  public generateToken(data: IUsers): string {
    return jwt.sign(data, key, { expiresIn: "1h" });
  }

  public verifyToken(token: string) {
    return jwt.verify(token, key);
  }
}
