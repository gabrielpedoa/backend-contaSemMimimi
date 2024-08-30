import { NextFunction, Request, Response } from "express";
import { JwtService } from "../../data/utils/jwt";
import { UnauthorizedError } from "../config/errors/unauthorized-error";

const jwtService = new JwtService();

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const auth = req.headers?.authorization;
    if (!auth)
      return res
        .status(401)
        .json(
          new UnauthorizedError("There's no token authentication provided.")
        );
    await jwtService.verifyToken(auth!);
    next();
  } catch (error) {
    return res
      .status(401)
      .json(
        new UnauthorizedError("Invalid token. Please provide a valid token.")
      );
  }
};
