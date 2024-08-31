import { IExpenseRepository } from "../../../../infra/interfaces/expenses/expense-repository-interface";
import { ILoadAllExpensesUseCase } from "../../../interfaces/expenses/expense/loadAll-interface";

export class LoadAllExpenseUseCase implements ILoadAllExpensesUseCase {
  constructor(private readonly expenseRepository: IExpenseRepository) {}
  async execute(): Promise<IExpense[]> {
    return await this.expenseRepository.loadAll();
  }
}
