import { NextFunction, Request, Response } from "express";
import { JwtService } from "../../data/utils/jwt";
import { UnauthorizedError } from "../config/errors/unauthorized-error";

const jwtService = new JwtService();

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = extractTokenFromHeader(req);
    if (!token)
      return res
        .status(401)
        .json(
          new UnauthorizedError("There's no token authentication provided.")
        );
    await jwtService.verifyToken(token!);
    next();
  } catch (error) {
    return res
      .status(401)
      .json(
        new UnauthorizedError("Invalid token. Please provide a valid token.")
      );
  }
};

function extractTokenFromHeader(request: Request): string | undefined {
  const [type, token] = request.headers.authorization?.split(" ") ?? [];
  return type === "Bearer" && token ? token : undefined;
}
