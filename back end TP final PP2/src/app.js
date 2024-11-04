// Dependencias
import express from "express";
import config from "./config";
import morgan from "morgan";
import helmet from "helmet";
import "./databaseMongo.js";

// Rutas de los endpoints creados en SQL Server
import productsRoutes from "./routes/products.routes";
import mesasroutes from "./routes/mesas.routes.js";
import categoriasroutes from "./routes/categorias.routes.js";
import pedidosroutes from "./routes/pedidos.routes.js";

// Rutas de los endpoints creados en MongoDb
import usuariosroutes from "./routes/usuarios.routes.js";
import authroutes from "./routes/auth.routes.js";
import { createRoles, createAdmin } from "./libs/initialSetUp.js";

const app = express();
createRoles();
createAdmin();

const cors = require("cors");

app.use(cors());

// una vez iniciada la base de datos, va a mostrar por unica vez en la consola, esto se debe a que en la logica
// le decimos que ya estan los roles, que ya no ejecute la promesa. Los roles que corresponden a cada
// usuario, pero para poder verlos de nuevo, ingresar por consola:
// 1: mongo
// 2: show dbs
// 3: use "nombre de la BD"
// 4: show collections
// 5: db.roles.find

// Dependencias de Mongo DB
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("port", config.port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Uso de rutas de SQL Server
app.use(productsRoutes);
app.use(mesasroutes);
app.use(categoriasroutes);
app.use(pedidosroutes);

// Uso de rutas de Mongo DB
app.use(usuariosroutes);
app.use(authroutes);

export default app;
