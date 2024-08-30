import { NotImplementedOrServerError } from "../../../presentational/helpers/httpResponse";
import { NotFoundError } from "./notFound-error";
import { PayloadError } from "./payload-error";
import { UnauthorizedError } from "./unauthorized-error";

interface CustomError {
  statusCode: number;
  errorType: string;
  errorMessage: string;
}

function getErrorType(errorInstance: CustomError) {
  return {
    statusCode: errorInstance.statusCode,
    data: {
      errorType: errorInstance.errorType,
      errorMessage: errorInstance.errorMessage,
      statusCode: errorInstance.statusCode,
    },
  };
}

export default (error: unknown): IHttpResponse => {
  if (
    error instanceof PayloadError ||
    error instanceof NotFoundError ||
    error instanceof UnauthorizedError
  )
    return getErrorType(error);
  return NotImplementedOrServerError();
};
