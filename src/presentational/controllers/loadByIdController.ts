import { NotFoundError } from "../../main/config/errors/notFound-error";
import { BadRequest, Ok } from "../helpers/httpResponse";

export class LoadByIdController<T> implements IController<{ id: string }> {
  constructor(private readonly loadByIdUsecase: ILoadByIdUsecase<T>) {}

  public async handle({ id }: { id: string }): Promise<IHttpResponse> {
    if (!id) return BadRequest("O id é necessario");
    const item = await this.loadByIdUsecase.execute(id);
    if (!item) throw new NotFoundError("User not found");
    return Ok(item);
  }
}
