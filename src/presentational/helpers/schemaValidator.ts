import { ZodObject } from "zod";

export class SchemaValidator<T> implements ISchemaValidator<T> {
  private schema: ZodObject<any>;
  constructor(schema: ZodObject<any>) {
    this.schema = schema;
  }

  public isValid(data: T) {
    const isSchemaValid = this.schema.safeParse(data);
    if (isSchemaValid.success) {
      return null;
    }
    const formattedErrors = isSchemaValid.error.errors.map((e) => ({
      path: e.path,
      message: e.message,
    }));
    return {
      statusCode: 400,
      errorType: "PayloadError",
      errorMessage: formattedErrors,
    };
  }
}
