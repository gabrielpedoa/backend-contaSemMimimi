import jwt from "jsonwebtoken";

export class JwtService {
  private key = "GabRiElZinHoXav3S3cr3t4";
  
  public async generateToken(data: any) {
    const token = await new Promise((resolve) => {
      const t = jwt.sign(data, this.key);
      resolve(t);
    });
    return token as string;
  }

  public async verifyToken(token: string) {
    await new Promise((resolve) => {
      try {
        jwt.verify(token, this.key);
        resolve(null);
      } catch (error) {
        throw error;
      }
    });
  }
}
