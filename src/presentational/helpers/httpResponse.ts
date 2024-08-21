import { NotFoundError } from "../../main/config/errors/notFound-error";
import { PayloadError } from "../../main/config/errors/payload-error";
import { UnauthorizedError } from "../../main/config/errors/unauthorized-error";

function HttpResponse<T>(statusCode: number, data: T) {
  return {
    statusCode,
    data: data,
  };
}

function ExceptionError(error: unknown) {
  const { message } = error as Error;
  const payload = new PayloadError(message);
  
  return HttpResponse(400, payload);
}

const Ok = <T>(data: T) => HttpResponse(200, data);
const BadRequest = <T>(data: T) => HttpResponse(400, data);
const Created = <T>(data: T) => HttpResponse(201, data);
const NotFound = () => HttpResponse(404, null);
const Unauthorized = () => HttpResponse(401, null);

export { Ok, BadRequest, Created, NotFound, Unauthorized, ExceptionError };
