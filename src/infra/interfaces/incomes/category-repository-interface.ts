export interface IIncomeCategoryRepository {
  create(data: Omit<IIncomeCategory, "id_category">): Promise<IIncomeCategory>;
  loadAll(): Promise<IIncomeCategory[]>;
  loadById(id: number): Promise<IIncomeCategory | null>;
  loadByName(name: string): Promise<IIncomeCategory | null>;
  update(data: IIncomeCategory): Promise<IIncomeCategory>;
  delete(id: number): Promise<boolean>;
}
