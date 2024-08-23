import {
  BadRequest,
  Created
} from "../helpers/httpResponse";

export class CreateController<In, Out> implements IController<In> {
  constructor(
    private readonly createUseCase: ICreateUsecase<In, Out>,
    private readonly schemaValidator: ISchemaValidator<In>
  ) {}

  public async handle(data: In) {
    const payloadNotValid = this.schemaValidator.isValid(data);
    if (payloadNotValid) return BadRequest(payloadNotValid);
    const response = await this.createUseCase.execute(data);
    return Created(response);
  }
}
