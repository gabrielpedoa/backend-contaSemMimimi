import { Ok } from "../helpers/httpResponse";

export class LoadAllController<T> implements IController<undefined> {
  constructor(private readonly loadlAllUseCase: ILoadAllUsecase<T>) {}

  public async handle(): Promise<IHttpResponse> {
    const data = await this.loadlAllUseCase.execute();
    return Ok(data);
  }
}
