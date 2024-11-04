import { Router } from "express";

import {
  signInHandler,
  signUpHandler,
} from "../controllers.mongodb/auth.controller.js";
import {
  checkExistingUser,
  checkRolesExisted,
} from "../middlewares/verifySignup.js";

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
  [checkExistingUser, checkRolesExisted],
  signUpHandler
);

router.post("/signin", signInHandler);

export default router;
