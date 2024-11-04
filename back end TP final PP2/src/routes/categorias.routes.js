import { Router } from "express";
import {
  createNewCategoria,
  deleteCategoriasById,
  getCategorias,
  getTotalCategorias,
  updateCategoriasById,
} from "../controllers/categorias.controller";

const router = Router();

router.get("/categorias", getCategorias);

router.post("/categorias", createNewCategoria);

router.get("/categorias/count", getTotalCategorias);

router.delete("/categorias/:id_categoria", deleteCategoriasById);

router.put("/categorias/:id_categoria", updateCategoriasById);

export default router;
