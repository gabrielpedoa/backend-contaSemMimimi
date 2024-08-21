import { Router, Express } from "express";
import user from "./routes/user";

type IRouter = (router: Router) => void;

const router = Router({
  caseSensitive: false,
});

const routers: IRouter[] = [user];

export default (app: Express) => {
  routers.forEach((fn) => {
    fn(router);
  });

  app.use("/api", router);
};
