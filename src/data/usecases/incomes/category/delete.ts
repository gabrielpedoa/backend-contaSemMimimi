import { IIncomeCategoryRepository } from "../../../../infra/interfaces/incomes/category-repository-interface";
import { NotFoundError } from "../../../../main/config/errors/notFound-error";
import { IDeleteIncomeCategoryUseCase } from "../../../interfaces/incomes/category/delete-interface";

export class DeleteIncomeCategoryUseCase
  implements IDeleteIncomeCategoryUseCase
{
  constructor(private readonly incomeRepository: IIncomeCategoryRepository) {}
  async execute(id: number) {
    const incomeCategory = await this.incomeRepository.loadById(id);
    if (!incomeCategory) throw new NotFoundError("Income Category Not Found");
    return await this.incomeRepository.delete(id);
  }
}
