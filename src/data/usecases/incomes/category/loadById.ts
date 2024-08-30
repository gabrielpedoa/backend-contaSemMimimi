import { IIncomeCategoryRepository } from "../../../../infra/interfaces/incomes/category-repository-interface";
import { NotFoundError } from "../../../../main/config/errors/notFound-error";
import { ILoadByIdIncomeCategoryUseCase } from "../../../interfaces/incomes/category/loadById-interface";

export class LoadByIdIncomeCategoryUseCase
  implements ILoadByIdIncomeCategoryUseCase
{
  constructor(private readonly incomeRepository: IIncomeCategoryRepository) {}
  async execute(id: number): Promise<IIncomeCategory> {
    const categoryExists = await this.incomeRepository.loadById(id);
    if (!categoryExists) throw new NotFoundError("Income Category not found");
    return categoryExists;
  }
}
