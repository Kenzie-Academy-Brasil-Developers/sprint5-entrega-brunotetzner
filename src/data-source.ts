import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "bruno",
  password: "1234",
  database: "atividade_lógica_4",
  logging: false,
  entities: [path.join(__dirname, "/entities/**/*.{ts,js}")],
  migrations: [path.join(__dirname, "/migrations/**/*.{ts,js}")],
});
