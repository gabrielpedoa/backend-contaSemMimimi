import { DefaultHttpError } from "./default-error";

export class UnauthorizedError extends DefaultHttpError {
  constructor(message: string) {
    super(401, message);
  }
}
