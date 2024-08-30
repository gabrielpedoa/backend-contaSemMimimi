import prisma from "../prisma";

export class UsersRepository {
  public async create(data: Omit<IUsers, "id_user">): Promise<IUsers> {
    const { password, ...rest } = data;
    const createUser = await prisma.users.create({
      data: { ...rest, password: password! },
    });
    return createUser;
  }

  public async loadAll(): Promise<IUsers[]> {
    const users = await prisma.users.findMany({ where: { active: true } });
    return users;
  }

  public async loadById(id: number): Promise<IUsers | null> {
    const user = await prisma.users.findFirst({
      where: { id_user: id, active: true },
    });
    return user;
  }

  public async loadByEmail(email: string): Promise<IUsers | null> {
    const user = await prisma.users.findFirst({
      where: { email: email, active: true },
    });
    return user;
  }

  public async update(data: IUsers): Promise<IUsers> {
    const user = await prisma.users.update({
      data: { ...data },
      where: { id_user: data.id_user },
    });
    return user;
  }

  public async delete(id: number): Promise<boolean> {
    await prisma.users.update({
      data: { active: false },
      where: { id_user: id },
    });
    return true;
  }
}
