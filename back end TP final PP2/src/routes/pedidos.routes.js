import { Router } from "express";

import { createNewPedido, deletePedidoById, getPedidoById, getPedidos, getTotalPedidos, updatePedidoById } from "../controllers/pedidos.controller";

const router = Router ()

router.get("/pedidos", getPedidos)

router.post("/pedidos", createNewPedido)

router.get("/pedidos/count", getTotalPedidos);

router.get("/pedidos/:id_pedido", getPedidoById);

router.delete("/pedidos/:id_pedido", deletePedidoById);

router.put("/pedidos/:id_pedido", updatePedidoById);

export default router;
