function HttpResponse<T>(statusCode: number, data: T) {
  return {
    statusCode,
    data: data,
  };
}

const Ok = <T>(data: T) => HttpResponse(200, data);
const BadRequest = <T>(data: T) => HttpResponse(400, data);
const Created = <T>(data: T) => HttpResponse(201, data);
const NotFound = () => HttpResponse(404, null);
const Unauthorized = () => HttpResponse(401, null);
const NotImplementedOrServerError = () =>
  HttpResponse(500, "Internal Server Error!");

export {
  BadRequest,
  Created,
  NotFound,
  NotImplementedOrServerError,
  Ok,
  Unauthorized,
};
