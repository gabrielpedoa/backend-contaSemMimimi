import prisma from "../../prisma";

export class ExpenseRepository {
  public async create(data: Omit<IExpense, "id_expense">): Promise<IExpense> {
    return await prisma.expense.create({ data: { ...data } });
  }

  public async loadAll(): Promise<IExpense[]> {
    return await prisma.expense.findMany({ where: { active: true } });
  }

  public async loadById(id: number): Promise<IExpense | null> {
    return await prisma.expense.findFirst({ where: { id_expense: id } });
  }

  public async update(data: IExpense): Promise<IExpense> {
    return await prisma.expense.update({
      data: { ...data },
      where: { id_expense: data.id_expense },
    });
  }

  public async delete(id: number): Promise<boolean> {
    await prisma.expense.update({
      data: { active: false },
      where: { id_expense: id },
    });
    return true;
  }
}
