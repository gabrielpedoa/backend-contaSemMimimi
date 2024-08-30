export interface ICreateExpenseCategoryUseCase {
  execute(
    data: Omit<IExpenseCategory, "id_category">
  ): Promise<IExpenseCategory>;
}
