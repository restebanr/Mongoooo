import { connectToMongoDB } from "./baseDatos";
import express from "express";
import rutasAuth from "./routes/auth";
// import rutillas from "./routes"
import dotenv from "dotenv"
import rutasPatata from "./routes/patata"

dotenv.config()


connectToMongoDB();
const app = express();
app.use(express.json());

app.use("/auth", rutasAuth)
app.use("/patata", rutasPatata)

app.listen(3000, ()=>console.log("El API comenzó en el puerto 3000"));