import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const connectionString = `${process.env.DATABASE_URL}`; //Conexao com os banco de dados

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

//Forma antiga de usar o PrismaClient
//const prisma = new PrismaClient();

export { prisma };

export async function connection() {
  //Asyng significa que a função é assincrona (vai demorar um tempo para ser executada)
  try {
    await prisma.$connect(); //Away significa esperar a resposta do banco de dados
    console.log("Conectado com o banco de dados");
  } catch (error) {
    console.log(error);
  }
}
