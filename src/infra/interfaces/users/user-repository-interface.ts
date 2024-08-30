export interface IUserRepository {
  create(data: Omit<IUsers, "id_user">): Promise<IUsers>;
  loadAll(): Promise<IUsers[]>;
  loadById(id: number): Promise<IUsers | null>;
  loadByEmail(email: string): Promise<IUsers | null>;
  update(data: IUsers): Promise<IUsers>;
  delete(id: number): Promise<boolean>;
}
