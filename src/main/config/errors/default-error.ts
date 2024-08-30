export class DefaultHttpError extends Error {
  errorType: string;
  errorMessage: string;
  statusCode: number;
  constructor(status: number, message: string) {
    super(message);
    this.statusCode = status;
    this.errorType = this.constructor.name;
    this.errorMessage = message;
  }
}
