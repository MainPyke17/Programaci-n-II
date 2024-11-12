import { Router } from "express";

import {
  getMesas,
  createNewMesa,
  getTotalMesas,
  getMesasById,
  deleteMesasById,
  updateMesasById,
} from "../controllers/mesas.controller";

const router = Router();

router.get("/mesas", getMesas);

router.post("/mesas", createNewMesa);

router.get("/mesas/count", getTotalMesas);

router.get("/mesas/:id_mesa", getMesasById);

router.delete("/mesas/:id_mesa", deleteMesasById);

router.put("/mesas/:id_mesa", updateMesasById);

export default router;
