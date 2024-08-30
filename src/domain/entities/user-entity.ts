export class UserEntity {
  private id_user?: number;
  private name: string;
  private phone: string;
  private email: string;
  private password: string;
  private role: number;
  private active: boolean;
  private created_at: Date;
  private updated_at: Date;
  constructor(data: IUsers) {
    this.id_user = data.id_user;
    this.name = data.name;
    this.phone = data.phone;
    this.email = data.email;
    this.password = data.password!;
    this.role = data.role;
    this.active = data.active;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }

  public get getUserEntity(): IUsers {
    return {
      id_user: this.id_user,
      name: this.name,
      phone: this.phone,
      email: this.email,
      password: this.password,
      role: this.role,
      active: this.active,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}
