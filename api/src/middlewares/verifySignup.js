import { ROLES } from "../models/Role";
import user from "../models/user";

// lo que hace es validar el email que tiene el usuario, que no se repitan, etc

export const checkExistingUser = async (req, res, next) => {
  try {
    const userFound = await user.findOne({ username: req.body.username });

    if (userFound)
      return res.status(400).json({ message: " El usuario ya existe " });

    const email = await user.findOne({ email: req.body.email });
    if (email)
      return res
        .status(400)
        .json({ message: "El gmail ya existe y no puede estar duplicado" });

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: "Role ${req.body.roles[i]} no existe",
        });
      }
    }
  }

  next();
};
