import express from "express";
import config from "./config";

import productsRoutes from "./routes/products.routes";
import mesas from "./routes/mesas";
import pedidos from "./routes/pedidos";
import detalle_pedidos from "./routes/detalle_pedidos";
import categoria from "./routes/categoria";

const app = express();

//settings para configurar el puerto
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(productsRoutes);
app.use(mesas);
app.use(pedidos);
app.use(detalle_pedidos);
app.use(categoria);

export default app;