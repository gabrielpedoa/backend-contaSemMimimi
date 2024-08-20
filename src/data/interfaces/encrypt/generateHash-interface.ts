export interface IEncryptGenerateHash {
  genHash(value: string): Promise<string>;
}
