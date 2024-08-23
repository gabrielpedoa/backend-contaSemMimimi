import { BadRequest, Ok } from "../helpers/httpResponse";

export class DeleteController implements IController<{ id: string }> {
  constructor(private readonly deleteUsecase: IDeleteUsecase) {}

  public async handle({ id }: { id: string }): Promise<IHttpResponse> {
    console.log(id);
    if (!id) return BadRequest("O paramêtro id na url é obrigatório");
    const deleted = await this.deleteUsecase.execute(id);
    return Ok(deleted);
  }
}
