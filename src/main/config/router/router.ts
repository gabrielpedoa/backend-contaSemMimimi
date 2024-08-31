import { Router, Express } from "express";
import user from "./routes/user";
import auth from "./routes/auth";
import income from "./routes/income";

type IRouter = (router: Router) => void;

const router = Router({
  caseSensitive: false,
});

const routers: IRouter[] = [user, auth, income];

export default (app: Express) => {
  routers.forEach((fn) => {
    fn(router);
  });

  app.use("/api", router);
};
