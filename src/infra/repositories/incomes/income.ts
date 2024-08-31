import prisma from "../../prisma";

export class IncomeRepository {
  public async create(data: Omit<IIncome, "id_income">): Promise<IIncome> {
    return await prisma.income.create({
      data: { ...data },
    });
  }

  public async loadAll(): Promise<IIncome[]> {
    return await prisma.income.findMany({ where: { active: true } });
  }

  public async loadById(id: number): Promise<IIncome | null> {
    return await prisma.income.findFirst({ where: { id_income: id } });
  }

  public async loadByName(name: string): Promise<IIncome | null> {
    return await prisma.income.findFirst({
      where: { active: true, name: name },
    });
  }

  public async update(data: IIncome): Promise<IIncome> {
    return await prisma.income.update({
      data: { ...data },
      where: { id_income: data.id_income },
    });
  }

  public async delete(id: number): Promise<boolean> {
    await prisma.income.update({
      data: { active: false },
      where: { id_income: id },
    });
    return true;
  }
}
