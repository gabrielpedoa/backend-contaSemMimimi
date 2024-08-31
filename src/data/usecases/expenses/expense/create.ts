import { ExpenseEntity } from "../../../../domain/entities/expenses/expense-entity";
import { IExpenseRepository } from "../../../../infra/interfaces/expenses/expense-repository-interface";
import { PayloadError } from "../../../../main/config/errors/payload-error";
import { ICreateExpenseUseCase } from "../../../interfaces/expenses/expense/create-interface";

export class CreateExpenseUseCase implements ICreateExpenseUseCase {
  constructor(private readonly expenseRepository: IExpenseRepository) {}

  async execute(data: Omit<IExpense, "id_expense">): Promise<IExpense> {
    const existsExpense = await this.expenseRepository.loadByName(data.name);
    if (existsExpense) throw new PayloadError("Expense already exists");
    const expenseEntity = new ExpenseEntity(data);
    return await this.expenseRepository.create(expenseEntity.getExpenseEntity);
  }
}
