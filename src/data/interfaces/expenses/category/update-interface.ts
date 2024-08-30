export interface IUpdateExpenseCategoryUseCase {
  execute(data: IExpenseCategory): Promise<IExpenseCategory>;
}
