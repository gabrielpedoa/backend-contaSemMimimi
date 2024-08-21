import { BadRequest, ExceptionError, Ok } from "../helpers/httpResponse";

export class UpdateController<T> implements IController<T, unknown> {
  constructor(
    private readonly updateUsecase: IUpdateUsecase<T>,
    private readonly schemaValidator: ISchemaValidator<T>
  ) {}

  public async handle(data: T): Promise<httpResponse<unknown>> {
    try {
      const payloadNotValid = this.schemaValidator.isValid(data);
      if (payloadNotValid) return BadRequest(payloadNotValid);
      const update = await this.updateUsecase.execute(data);
      return Ok(update);
    } catch (error) {
      console.log("UpdateController: ", error);
      return ExceptionError(error);
    }
  }
}
