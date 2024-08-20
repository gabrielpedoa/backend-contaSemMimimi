export interface IEncryptCompareHash {
  compare(pass: string, hash: string): Promise<boolean>;
}
