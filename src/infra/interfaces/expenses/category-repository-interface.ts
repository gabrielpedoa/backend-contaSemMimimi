export interface IExpenseCategoryRepository {
  create(
    data: Omit<IExpenseCategory, "id_category">
  ): Promise<IExpenseCategory>;
  loadAll(): Promise<IExpenseCategory[]>;
  loadById(id: number): Promise<IExpenseCategory | null>;
  update(data: IExpenseCategory): Promise<IExpenseCategory>;
  delete(id: number): Promise<boolean>;
}
