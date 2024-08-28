import { Router } from "express";

import { getMesas, createNewMesa, getTotalMesas, getMesasById, deleteMesasById, updateMesasById } from "../controllers/mesas";

const router = Router();

router.get("/mesas", getMesas);

router.post("/mesas", createNewMesa);

router.get("/products/count", getTotalMesas);

router.get("/mesas/:id", getMesasById);

router.delete("/mesas/:id", deleteMesasById);

router.put("/mesas/:id", updateMesasById);

export default router;