import { ExpenseCategoryEntity } from "../../../../domain/entities/expenses/category-entity";
import { IExpenseCategoryRepository } from "../../../../infra/interfaces/expenses/category-repository-interface";
import { PayloadError } from "../../../../main/config/errors/payload-error";
import { ICreateExpenseCategoryUseCase } from "../../../interfaces/expenses/category/create-interface";

export class CreateExpenseCategoryUseCase
  implements ICreateExpenseCategoryUseCase
{
  constructor(
    private readonly expenseCategoryRepository: IExpenseCategoryRepository
  ) {}
  async execute(
    data: Omit<IExpenseCategory, "id_category">
  ): Promise<IExpenseCategory> {
    const existsCategory = await this.expenseCategoryRepository.loadByName(
      data.name
    );
    if (existsCategory) throw new PayloadError("Category already exists");

    const expenseCategoryEntity = new ExpenseCategoryEntity(data);

    return await this.expenseCategoryRepository.create(
      expenseCategoryEntity.getExpenseCategoryEntity
    );
  }
}
