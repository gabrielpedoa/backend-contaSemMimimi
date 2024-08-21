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
    console.log("ZodSchemaValidator");
    return {
      statusCode: 400,
      error: isSchemaValid.error.errors,
    };
  }
}
