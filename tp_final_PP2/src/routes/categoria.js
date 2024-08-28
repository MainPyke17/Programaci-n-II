import { Router } from "express";
import { createNewCategoria, deleteCategoriasById, getCategorias, getCategoriasById, getTotalCategorias, updateCategoriasById } from "../controllers/categorias";

const router = Router()

router.get("/categorias", getCategorias)

router.post("/categorias", createNewCategoria)

router.get("/products/count", getTotalCategorias );

router.get("/categorias/:id", getCategoriasById);

router.delete("/categorias/:id", deleteCategoriasById);

router.put("/categorias/:id", updateCategoriasById);

export default router;

