import { NextFunction, Request, Response } from "express";
import { JwtService } from "../../data/utils/jwt";
import { Unauthorized } from "../../presentational/helpers/httpResponse";

const jwtService = new JwtService();

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.headers);
    const auth = req.headers?.authorization;
    
    if (!auth || !auth.startsWith("Bearer ")) {
      return res.status(401).send("Not Authorized - Invalid token format");
    }

    const token = auth
    if (!token) {
      return res.status(403).send("Not Authorized - No token provided");
    }

    await jwtService.verifyToken(token);
    next();
  } catch (error) {
    const unauthorized = Unauthorized();
    return res.status(unauthorized.statusCode).send("Acesso não autorizado!");
  }
};
