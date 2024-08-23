import { BadRequest, Ok } from "../helpers/httpResponse";

export class DeleteController implements IController<{ id: string }, unknown> {
  constructor(private readonly deleteUsecase: IDeleteUsecase) {}

  public async handle({ id }: { id: string }): Promise<httpResponse<unknown>> {
    try {
      console.log(id);
      if (!id) return BadRequest("O paramêtro id na url é obrigatório");
      const deleted = await this.deleteUsecase.execute(id);
      return Ok(deleted);
    } catch (error) {
      console.log("DeleteController: ", error);
      return BadRequest(error);
    }
  }
}
