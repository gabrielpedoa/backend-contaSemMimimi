import { ExpenseEntity } from "../../../../domain/entities/expenses/expense-entity";
import { IExpenseRepository } from "../../../../infra/interfaces/expenses/expense-repository-interface";
import { NotFoundError } from "../../../../main/config/errors/notFound-error";
import { IUpdateExpenseUseCase } from "../../../interfaces/expenses/expense/update-interface";

export class UpdateExpenseUseCase implements IUpdateExpenseUseCase {
  constructor(private readonly expenseRepository: IExpenseRepository) {}
  async execute(data: IExpense): Promise<IExpense> {
    const { id_expense, ...rest } = data;
    const existsExpense = await this.expenseRepository.loadById(
      Number(id_expense!)
    );
    if (!existsExpense) throw new NotFoundError("Expense not found");
    const expenseEntity = new ExpenseEntity({
      id_expense: Number(id_expense),
      ...rest,
    });
    return await this.expenseRepository.update(expenseEntity.getExpenseEntity);
  }
}
