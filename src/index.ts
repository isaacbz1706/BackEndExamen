import Server from "./models/server";
import dotenv from 'dotenv'

//Configure las variables de ambiente
dotenv.config();

const server = new Server();