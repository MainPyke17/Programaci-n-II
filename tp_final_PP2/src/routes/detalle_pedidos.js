import { Router } from "express";
import { createNewDetalle_Pedido, deleteDetalle_PedidostById, getDetalle_PedidosById, getDetalles_Pedidos, getTotalDetalle_Pedidos, updateDetalle_PedidosById } from "../controllers/detalles_pedidos";

const router = Router();

router.get("/detalles_pedidos", getDetalles_Pedidos);

router.post("/detalles_pedidos", createNewDetalle_Pedido);

router.get("/products/count", getTotalDetalle_Pedidos);

router.get("/detalles_pedidos/:id", getDetalle_PedidosById);

router.delete("/detalles_pedidos/:id", deleteDetalle_PedidostById);

router.put("/detalles_pedidos/:id", updateDetalle_PedidosById);

export default router;

