import { DefaultHttpError } from "./default-error";

export class PayloadError extends DefaultHttpError {
  constructor(message: string) {
    super(400, message, "PAYLOAD_ERROR");
    this.name = "PayloadError";
  }
}
