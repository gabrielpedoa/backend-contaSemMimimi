export interface IIncomeRepository {
  create(data: Omit<IIncome, "id_income">): Promise<IIncome>;
  loadAll(): Promise<IIncome[]>;
  loadById(id: number): Promise<IIncome | null>;
  update(data: IIncome): Promise<IIncome>;
  delete(id: number): Promise<boolean>;
}
