import { IncomeCategoryEntity } from "../../../../domain/entities/incomes/category-entity";
import { IIncomeCategoryRepository } from "../../../../infra/interfaces/incomes/category-repository-interface";
import { NotFoundError } from "../../../../main/config/errors/notFound-error";
import { IUpdateIncomeCategoryUseCase } from "../../../interfaces/incomes/category/update-interface";

export class UpdateIncomeCategoryUseCase
  implements IUpdateIncomeCategoryUseCase
{
  constructor(private readonly incomeRepository: IIncomeCategoryRepository) {}

  async execute(data: IIncomeCategory) {
    const { id_category, ...rest } = data;
    const incomeCategory = await this.incomeRepository.loadById(
      Number(id_category!)
    );
    if (!incomeCategory) throw new NotFoundError("Income category not found");

    const incomeCategoryEntity = new IncomeCategoryEntity({
      id_category: Number(id_category),
      ...rest,
    });
    return await this.incomeRepository.update(
      incomeCategoryEntity.getIncomeCategoryEntity
    );
  }
}
