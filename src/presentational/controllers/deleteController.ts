import { BadRequest, Ok } from "../helpers/httpResponse";

export class DeleteController implements IController<{ id: string }> {
  constructor(private readonly deleteUsecase: IDeleteUsecase) {}

  public async handle({ id }: { id: string }): Promise<IHttpResponse> {
    if (!id) return BadRequest("The params id is required on url");
    const deleted = await this.deleteUsecase.execute(id);
    return Ok(deleted);
  }
}
