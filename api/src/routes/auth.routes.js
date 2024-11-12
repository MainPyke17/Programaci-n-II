import { Router } from "express";

import {
  signin,
  signup,
  logOut,
} from "../controllers.mongodb/auth.controller.js";
import {
  checkExistingUser,
  checkRolesExisted,
} from "../middlewares/verifySignup.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema } from "../schemas/auth.schema.js";
import { verifyToken } from "../middlewares/authJwt.js";

const router = Router();

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post(
  "/signup",
  validateSchema(registerSchema),
  [checkExistingUser, checkRolesExisted],
  signup
);

router.post("/signin", verifyToken, signin);

router.post("/logout", logOut);

export default router;
