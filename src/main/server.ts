import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import dbConnect from "./config/utils/dbConnect";

dotenv.config();

const PORT = process.env.PORT ?? 3000;

class Server {
  private app = express();

  private middlewares() {
    this.app.use(cors({ origin: "*", credentials: true }));
    this.app.use(express.static("public"));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  private start() {
    const cb = () => console.log("Server is online on port: ", PORT);
    this.app.listen(PORT, cb);
  }

  public bootstrap() {
    this.middlewares();
    //routes(this.app);
    dbConnect();
    this.start();
  }
}

void new Server().bootstrap();
