import { DefaultHttpError } from "./default-error";

export class NotFoundError extends DefaultHttpError {
  constructor(message: string) {
    super(404, message, "NOTFOUND_ERROR");
    this.name = "NotFoundError"
  }
}
