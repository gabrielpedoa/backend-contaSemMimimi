import bcrypt from "bcrypt";

export class Encrypter {
  private readonly saltRounds = 10;
  public async generateHash(value: string) {
    const salt = await bcrypt.genSalt(this.saltRounds);
    const hashed = await bcrypt.hash(value, salt);
    return hashed;
  }

  public async compare(pass: string, hash: string){
    const isEqual = await bcrypt.compare(pass, hash)
    return isEqual
  }
}