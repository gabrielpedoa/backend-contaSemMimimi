import prisma from "../../../infra/prisma";

export default async () => {
  prisma
    .$connect()
    .then(() => console.log("Database connected!"))
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
