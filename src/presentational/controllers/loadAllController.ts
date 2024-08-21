import { ExceptionError, Ok } from "../helpers/httpResponse";

export class LoadAllController<T> implements IController<undefined, unknown> {
  constructor(private readonly loadlAllUseCase: ILoadAllUsecase<T>) {}

  public async handle(): Promise<httpResponse<unknown>> {
    try {
      const data = await this.loadlAllUseCase.execute();
      return Ok(data);
    } catch (error) {
      return ExceptionError(error);
    }
  }
}
