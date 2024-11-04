import { Router } from "express";

import { createUser } from "../controllers.mongodb/usuarios.controller";
import { isAdmin, verifyToken } from "../middlewares/authJwt";
import { checkExistingUser } from "../middlewares/verifySignup";

const router = Router();

router.post("/usuarios", [verifyToken, isAdmin, checkExistingUser], createUser);

export default router;
