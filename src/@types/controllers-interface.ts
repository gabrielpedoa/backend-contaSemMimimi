interface IController<In, Out> {
  handle: (data: In) => Promise<httpResponse<Out>>;
}
