import { Router, Express } from "express";
import user from "./routes/user";
import auth from "./routes/auth";
import income from "./routes/income";
import expense from "./routes/expense";
import incomeCategory from "./routes/incomeCategory";
import expenseCategory from "./routes/expenseCategory";

type IRouter = (router: Router) => void;

const router = Router({
  caseSensitive: false,
});

const routers: IRouter[] = [
  user,
  auth,
  incomeCategory,
  income,
  expenseCategory,
  expense,
];

export default (app: Express) => {
  routers.forEach((fn) => {
    fn(router);
  });

  app.use("/api", router);
};
