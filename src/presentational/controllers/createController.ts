import { BadRequest, Created, ExceptionError } from "../helpers/httpResponse";

export class CreateController<In, Out> implements IController<In, unknown> {
  constructor(
    private readonly createUseCase: ICreateUsecase<In, Out>,
    private readonly schemaValidator: ISchemaValidator<In>
  ) {}

  public async handle(data: In) {
    try {
      const payloadNotValid = this.schemaValidator.isValid(data);
      if (payloadNotValid) return BadRequest(payloadNotValid);
      const response = await this.createUseCase.execute(data);
      return Created(response);
    } catch (error) {
      console.log("CreateController: ", error);
      return ExceptionError(error);
    }
  }
}
