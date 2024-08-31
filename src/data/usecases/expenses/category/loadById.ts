import { IExpenseCategoryRepository } from "../../../../infra/interfaces/expenses/category-repository-interface";
import { NotFoundError } from "../../../../main/config/errors/notFound-error";
import { ILoadByIdExpenseCategoryUseCase } from "../../../interfaces/expenses/category/loadById-interface";

export class LoadByIdExpenseCategoryUseCase
  implements ILoadByIdExpenseCategoryUseCase
{
  constructor(
    private readonly expenseCategoryRepository: IExpenseCategoryRepository
  ) {}

  async execute(id: number | string): Promise<IExpenseCategory | null> {
    const expenseCategory = await this.expenseCategoryRepository.loadById(
      Number(id)
    );
    if (!expenseCategory) throw new NotFoundError("Expense Category not found");
    return expenseCategory;
  }
}
