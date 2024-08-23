import { NotFoundError } from "../../main/config/errors/notFound-error";
import { PayloadError } from "../../main/config/errors/payload-error";
import { UnauthorizedError } from "../../main/config/errors/unauthorized-error";

function HttpResponse<T>(statusCode: number, data: T) {
  return {
    statusCode,
    data: data,
  };
}

function PayloadExceptionError(error: unknown) {
  const { message } = error as Error;
  const payload = new PayloadError(message);
  return HttpResponse(400, payload);
}

function NotFoundExceptionError(error: unknown) {
  const { message } = error as Error;
  const notFound = new NotFoundError(message);
  return HttpResponse(404, notFound);
}

function UnauthorizedExceptionError(error: unknown) {
  const { message } = error as Error;
  const unauthorized = new UnauthorizedError(message);
  return HttpResponse(401, unauthorized);
}

const Ok = <T>(data: T) => HttpResponse(200, data);
const BadRequest = <T>(data: T) => HttpResponse(400, data);
const Created = <T>(data: T) => HttpResponse(201, data);
const NotFound = <T>(data: T) => HttpResponse(404, data);
const Unauthorized = <T>(data: T) => HttpResponse(401, data);

export {
  Ok,
  BadRequest,
  Created,
  NotFound,
  Unauthorized,
  PayloadExceptionError,
  NotFoundExceptionError,
  UnauthorizedExceptionError,
};
