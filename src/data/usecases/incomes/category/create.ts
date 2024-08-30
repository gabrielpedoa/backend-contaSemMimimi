import { IncomeCategoryEntity } from "../../../../domain/entities/incomes/category-entity";
import { IIncomeCategoryRepository } from "../../../../infra/interfaces/incomes/category-repository-interface";
import { PayloadError } from "../../../../main/config/errors/payload-error";
import { ICreateIncomeCategoryUseCase } from "../../../interfaces/incomes/category/create-interface";

export class CreateIncomeCategoryUseCase
  implements ICreateIncomeCategoryUseCase
{
  constructor(private readonly incomeRepository: IIncomeCategoryRepository) {}

  async execute(
    data: Omit<IIncomeCategory, "id_category">
  ): Promise<IIncomeCategory> {
    const existsCategory = await this.incomeRepository.loadByName(data.name);
    if (existsCategory)
      throw new PayloadError("This Income Category already exists");

    const incomeCategoryEntity = new IncomeCategoryEntity(data);
    
    return await this.incomeRepository.create(
      incomeCategoryEntity.getIncomeCategoryEntity
    );
  }
}
