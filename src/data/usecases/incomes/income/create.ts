import { IncomeEntity } from "../../../../domain/entities/incomes/income-entity";
import { IIncomeRepository } from "../../../../infra/interfaces/incomes/income-repository-interface";
import { PayloadError } from "../../../../main/config/errors/payload-error";
import { ICreateIncomeUseCase } from "../../../interfaces/incomes/income/create-interface";

export class CreateIncomeUseCase implements ICreateIncomeUseCase {
  constructor(private readonly incomeRepository: IIncomeRepository) {}

  async execute(data: Omit<IIncome, "id_income">): Promise<IIncome> {
    const existsIncome = await this.incomeRepository.loadByName(data.name);
    if (existsIncome) throw new PayloadError("Income already exists");

    const incomeEntity = new IncomeEntity(data);
    return await this.incomeRepository.create(incomeEntity.getIncomeEntity());
  }
}
