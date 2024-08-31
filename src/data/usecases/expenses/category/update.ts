import { ExpenseCategoryEntity } from "../../../../domain/entities/expenses/category-entity";
import { IExpenseCategoryRepository } from "../../../../infra/interfaces/expenses/category-repository-interface";
import { NotFoundError } from "../../../../main/config/errors/notFound-error";
import { IUpdateExpenseCategoryUseCase } from "../../../interfaces/expenses/category/update-interface";

export class UpdateExpenseCategoryUseCase
  implements IUpdateExpenseCategoryUseCase
{
  constructor(
    private readonly expenseCategoryRepository: IExpenseCategoryRepository
  ) {}

  async execute(data: IExpenseCategory): Promise<IExpenseCategory> {
    const { id_category, ...rest } = data;
    const expenseCategory = await this.expenseCategoryRepository.loadById(
      Number(id_category!)
    );
    if (!expenseCategory) throw new NotFoundError("Expense Category not found");
    const expenseCategoryEntity = new ExpenseCategoryEntity({
      id_category: Number(id_category),
      ...rest,
    });

    return await this.expenseCategoryRepository.update(
      expenseCategoryEntity.getExpenseCategoryEntity
    );
  }
}
