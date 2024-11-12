import { Router } from "express";

import { createUser, getUsers } from "../controllers.mongodb/usuarios.controller";
import { isAdmin, verifyToken } from "../middlewares/authJwt";
import { checkExistingUser, checkRolesExisted } from "../middlewares/verifySignup";

const router = Router();

router.post("/usuarios", [verifyToken, isAdmin, checkExistingUser, checkRolesExisted], createUser);

router.get("/getuser", getUsers )

export default router;
