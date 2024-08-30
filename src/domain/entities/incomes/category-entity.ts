export class IncomeCategoryEntity {
  private id_category?: number;
  private name: string;
  private description: string;
  private created_at: Date;
  private updated_at: Date;
  private active: boolean;

  constructor(data: IIncomeCategory) {
    this.id_category = data.id_category;
    this.name = data.name;
    this.description = data.description;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
    this.active = data.active;
  }

  public get getIncomeCategoryEntity(): IIncomeCategory {
    return {
      id_category: this.id_category,
      name: this.name,
      description: this.description,
      created_at: this.created_at,
      updated_at: this.updated_at,
      active: this.active,
    };
  }
}
