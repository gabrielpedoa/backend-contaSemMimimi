import { IExpenseRepository } from "../../../../infra/interfaces/expenses/expense-repository-interface";
import { NotFoundError } from "../../../../main/config/errors/notFound-error";
import { IDeleteExpenseUseCase } from "../../../interfaces/expenses/expense/delete-interface";

export class DeleteExpenseUseCase implements IDeleteExpenseUseCase {
  constructor(private readonly expenseRepository: IExpenseRepository) {}
  async execute(id: number | string): Promise<boolean> {
    const existsExpense = await this.expenseRepository.loadById(Number(id));
    if (!existsExpense) throw new NotFoundError("Expense not found");
    return await this.expenseRepository.delete(Number(id));
  }
}
