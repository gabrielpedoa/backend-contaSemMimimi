import { IExpenseCategoryRepository } from "../../../../infra/interfaces/expenses/category-repository-interface";
import { ILoadAllExpenseCategoriesUseCase } from "../../../interfaces/expenses/category/loadAll-interface";

export class LoadAllExpenseCategoryUseCase
  implements ILoadAllExpenseCategoriesUseCase
{
  constructor(
    private readonly expenseCategoryRepository: IExpenseCategoryRepository
  ) {}

  async execute(): Promise<IExpenseCategory[]> {
    return this.expenseCategoryRepository.loadAll();
  }
}
