import { IExpenseCategoryRepository } from "../../../../infra/interfaces/expenses/category-repository-interface";
import { NotFoundError } from "../../../../main/config/errors/notFound-error";
import { IDeleteExpenseCategoryUseCase } from "../../../interfaces/expenses/category/delete-interface";

export class DeleteExpenseCategoryUseCase
  implements IDeleteExpenseCategoryUseCase
{
  constructor(
    private readonly expenseCategoryRepository: IExpenseCategoryRepository
  ) {}

  async execute(id: number | string): Promise<boolean> {
    const existsExpenseCategory = await this.expenseCategoryRepository.loadById(
      Number(id)
    );

    if (!existsExpenseCategory)
      throw new NotFoundError("Expense Category not found");

    return await this.expenseCategoryRepository.delete(Number(id));
  }
}
