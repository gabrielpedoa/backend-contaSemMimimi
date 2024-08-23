import { Request, Response } from "express";
import errorHandler from "../errors/errorHandler";

export default <In>(controller: IController<In>) => {
  return async (req: Request, res: Response) => {
    try {
      const { data, statusCode } = await controller.handle({
        ...req.body,
        ...req.params,
        ...req.query,
      });
      return res.status(statusCode).json(data);
    } catch (error) {
      console.log("catch expressAdapter", error);
      const { data, statusCode } = errorHandler(error);
      return res.status(statusCode).json(data);
    }
  };
};
