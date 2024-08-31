import prisma from "../../prisma";

export class ExpenseCategoryRepository {
  public async create(
    data: Omit<IExpenseCategory, "id_category">
  ): Promise<IExpenseCategory> {
    return await prisma.expense_category.create({
      data: { ...data },
    });
  }

  public async loadAll(): Promise<IExpenseCategory[]> {
    return await prisma.expense_category.findMany({ where: { active: true } });
  }

  public async loadById(id: number): Promise<IExpenseCategory | null> {
    return await prisma.expense_category.findFirst({
      where: { id_category: id },
    });
  }
  
  public async loadByName(name: string): Promise<IExpenseCategory | null> {
    return await prisma.expense_category.findFirst({
      where: { name: name, active: true },
    });
  }

  public async update(data: IExpenseCategory): Promise<IExpenseCategory> {
    return await prisma.expense_category.update({
      data: { ...data },
      where: { id_category: data.id_category },
    });
  }

  public async delete(id: number): Promise<boolean> {
    await prisma.expense_category.update({
      data: { active: false },
      where: { id_category: id },
    });
    return true;
  }
}
