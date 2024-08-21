interface IController<In, Out> {
  handle: (data: In) => Promise<httpResponse<Out>>;
}

interface ICreateUsecase<In, Out> {
  execute: (data: In) => Promise<Out>;
}

interface ISchemaValidator<T> {
  isValid: (data: T) => unknown;
}
interface IDeleteUsecase {
  execute: (id: string) => Promise<boolean>;
}

interface IUpdateUsecase<T> {
  execute: (data: T) => Promise<T>;
}

interface ILoadByIdUsecase<T> {
  execute: (id: string) => Promise<T | null>;
}

interface ILoadAllUsecase<T> {
  execute: () => Promise<T[]>;
}
