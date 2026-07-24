import express, { type Request, type Response } from "express";
import { connection } from "./src/db.js";
import cors from "cors";
import { matchRoutes } from "react-router";
import { router } from "./src/routes.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(cookieParser()); //Serve para interpretar os cookies

app.use(express.json()); // faz com que o express interprete informações do tipo JSON
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // autoriza o uso de credencias, como os dados sensiveis de um usuario
  }),
);
app.use(router);

connection();

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 ");
}); //Serve para ouvir uma porta do seu computador
