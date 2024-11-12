import { Router } from "express";

import * as productsCtrl from "../controllers/products.controller";

import { authJwt } from "../middlewares";

const router = Router();

router.get("/products", productsCtrl.getProducts);

router.post(
  "/newproduct",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.createNewProduct
);

router.get("/products/count", productsCtrl.getTotalProducts);

router.get("/products/:id_producto", productsCtrl.getProductById);

router.delete(
  "/products/:id_producto",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.deleteProductById
);

router.put(
  "/products/:id_producto",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.updateProductById
);

export default router;
