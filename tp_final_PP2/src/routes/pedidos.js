import { Router } from "express";

import { createNewPedido, deletePedidoById, getPedidoById, getPedidos, getTotalPedidos, updatePedidoById } from "../controllers/pedidos";

const router = Router ()

router.get("/pedidos", getPedidos)

router.post("/pedidos", createNewPedido)

router.get("/products/count", getTotalPedidos);

router.get("/pedidos/:id", getPedidoById);

router.delete("/pedidos/:id", deletePedidoById);

router.put("/pedidos/:id", updatePedidoById);

export default router;