export interface IEncryptGenerateHash {
  generateHash(value: string): Promise<string>;
}
