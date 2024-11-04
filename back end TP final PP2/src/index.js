import app from "./app";
import express from "express";
import productsroutes from "./routes/products.routes.js";
import mesasroutes from "./routes/mesas.routes.js";
import categoriasroutes from "./routes/categorias.routes.js";
import pedidosroutes from "./routes/pedidos.routes.js";
import cors from "cors";

// Define los orígenes permitidos
const ACCEPTED_ORIGINS = [
  "http://localhost:3001/products",
  "http://localhost:3001/pedidos",
  "http://localhost:5173/",
  "http://localhost:5173/desayunos_meriendas",
  "http://localhost:5173/almuerzos_cenas",
];

// Configura el middleware CORS
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || ACCEPTED_ORIGINS.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,POST,PUT,DELETE", // Permite estos métodos HTTP
    credentials: true, // Si necesitas manejar cookies o autenticación
  })
);

// Inicia el servidor en el puerto configurado
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});

// Middleware para analizar las solicitudes con formato JSON
app.use(express.json());

// Usa las rutas que importaste
app.use(productsroutes);
app.use(mesasroutes);
app.use(categoriasroutes);
app.use(pedidosroutes);
