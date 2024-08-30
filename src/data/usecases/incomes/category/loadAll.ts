import { IIncomeCategoryRepository } from "../../../../infra/interfaces/incomes/category-repository-interface";
import { ILoadAllIncomeCategoriesUseCase } from "../../../interfaces/incomes/category/loadAll-interface";

export class LoadAllIncomeCategoryUseCase
  implements ILoadAllIncomeCategoriesUseCase
{
  constructor(private readonly incomeRepository: IIncomeCategoryRepository) {}

  async execute(): Promise<IIncomeCategory[]> {
    return await this.incomeRepository.loadAll();
  }
}
