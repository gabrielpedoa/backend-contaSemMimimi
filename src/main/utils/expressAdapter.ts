import { Request, Response } from "express";

export default <In>(controller: IController<In, unknown>) => {
  return async (req: Request, res: Response) => {
    try {
      const { data, statusCode } = await controller.handle({
        ...req.body,
        ...req.params,
        ...req.query,
      });
      return res.status(statusCode).json(data);
    } catch (error) {
      console.log("ExpressAdapter: ", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
};
