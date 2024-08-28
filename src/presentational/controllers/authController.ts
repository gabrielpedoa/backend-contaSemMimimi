import { PayloadError } from "../../main/config/errors/payload-error";
import { Ok } from "../helpers/httpResponse";

export class AuthController {
  constructor(private readonly authUseCase: IAuthUseCase) {}

  async handle(data: { email: string; password: string }) {
    if (!data.email) throw new PayloadError("Email is required");
    if (!data.password) throw new PayloadError("Password is required");
    const response = await this.authUseCase.execute(data.email, data.password);
    return Ok(response);
  }
}
