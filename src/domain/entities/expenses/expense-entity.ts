export class ExpenseEntity {
  private id_expense?: number;
  private description: string | null;
  private category_id: number;
  private due_date: number;
  private created_at: Date;
  private updated_at: Date;
  private active: boolean;
  private name: string;
  private value: number | null;

  constructor(data: IExpense) {
    this.id_expense = data.id_expense;
    this.description = data.description;
    this.category_id = data.category_id;
    this.due_date = data.due_date;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
    this.active = data.active;
    this.name = data.name;
    this.value = data.value;
  }

  public get getExpenseEntity(): IExpense {
    return {
      id_expense: this.id_expense,
      description: this.description,
      category_id: this.category_id,
      due_date: this.due_date,
      created_at: this.created_at,
      updated_at: this.updated_at,
      active: this.active,
      name: this.name,
      value: this.value,
    };
  }
}
