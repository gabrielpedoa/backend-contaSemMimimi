import { IExpenseRepository } from "../../../../infra/interfaces/expenses/expense-repository-interface";
import { NotFoundError } from "../../../../main/config/errors/notFound-error";
import { ILoadByIdExpenseUseCase } from "../../../interfaces/expenses/expense/loadById-interface";

export class LoadByIdExpenseUseCase implements ILoadByIdExpenseUseCase {
  constructor(private readonly expenseRepository: IExpenseRepository) {}
  async execute(id: number | string): Promise<IExpense | null> {
    const existsExpense = await this.expenseRepository.loadById(Number(id));
    if (!existsExpense) throw new NotFoundError("Expense not found");
    return await this.expenseRepository.loadById(Number(id));
  }
}
