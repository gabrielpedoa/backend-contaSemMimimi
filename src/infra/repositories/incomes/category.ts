import prisma from "../../prisma";

export class IncomeCategoryRepository {
  public async create(
    data: Omit<IIncomeCategory, "id_category">
  ): Promise<IIncomeCategory> {
    return await prisma.income_category.create({
      data: { ...data },
    });
  }

  public async loadAll(): Promise<IIncomeCategory[]> {
    return await prisma.income_category.findMany({
      where: { active: true },
    });
  }

  public async loadById(id: number): Promise<IIncomeCategory | null> {
    return await prisma.income_category.findFirst({
      where: { id_category: id },
    });
  }

  public async update(data: IIncomeCategory): Promise<IIncomeCategory> {
    return await prisma.income_category.update({
      data: { ...data },
      where: { id_category: data.id_category },
    });
  }

  public async delete(id: number): Promise<boolean> {
    await prisma.income_category.update({
      data: { active: false },
      where: { id_category: id },
    });
    return true;
  }
}
