import { BadRequest, Ok } from "../helpers/httpResponse";

export class UpdateController<T> implements IController<T> {
  constructor(
    private readonly updateUsecase: IUpdateUsecase<T>,
    private readonly schemaValidator: ISchemaValidator<T>
  ) {}
  public async handle(data: T): Promise<IHttpResponse> {
    const payloadNotValid = this.schemaValidator.isValid(data);
    if (payloadNotValid) return BadRequest(payloadNotValid);
    const update = await this.updateUsecase.execute(data);
    return Ok(update);
  }
}
