export class DefaultHttpError extends Error {
  errorType: string;
  errorMessage: string;
  statusCode: number;
  errorCode: string;
  constructor(status: number, message: string, errorCode = "NOT_IMPLEMENTED") {
    super(message);
    this.statusCode = status;
    this.errorType = this.constructor.name;
    this.errorMessage = message;
    this.errorCode = errorCode;
  }
}
