export class IncomeEntity {
  private id_income?: number;
  private category_id: number;
  private id_user: number;
  private   entry_date: number
  private amount: number;
  private type: string;
  private created_at: Date;
  private updated_at: Date;
  private active: boolean;
  private name: string;
  private obs: string;

  constructor(data: IIncome) {
    this.id_income = data.id_income;
    this.category_id = data.category_id;
    this.id_user = data.id_user;
    this.entry_date = data.entry_date;
    this.amount = data.amount;
    this.type = data.type;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
    this.active = data.active;
    this.name = data.name;
    this.obs = data.obs;
  }

  public getIncomeEntity(): IIncome {
    return {
      id_income: this.id_income,
      category_id: this.category_id,
      id_user: this.id_user,
      entry_date: this.entry_date,
      amount: this.amount,
      type: this.type,
      created_at: this.created_at,
      updated_at: this.updated_at,
      active: this.active,
      name: this.name,
      obs: this.obs,
    };
  }
}
