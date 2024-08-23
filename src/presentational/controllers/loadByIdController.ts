import {
  BadRequest,
  ExceptionError,
  NotFound,
  Ok,
} from "../helpers/httpResponse";

export class LoadByIdController<T>
  implements IController<{ id: string }, unknown>
{
  constructor(private readonly loadByIdUsecase: ILoadByIdUsecase<T>) {}

  public async handle({ id }: { id: string }): Promise<httpResponse<unknown>> {
    try {
      if (!id) return BadRequest("O id é necessario");
      const item = await this.loadByIdUsecase.execute(id);
      if (!item) return NotFound(id);
      return Ok(item);
    } catch (error) {
      console.log("LoadByIdController: ", error);
      return ExceptionError(error);
    }
  }
}
