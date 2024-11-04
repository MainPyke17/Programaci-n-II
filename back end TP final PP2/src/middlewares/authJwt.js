import jwt from "jsonwebtoken";
import config from "../config";
import user from "../models/user";
import Role from "../models/Role";

// esta funcion es para confirmar que el usuario nos esta enviando su token 
// y va a verificar si nos esta mandando un token, si es moderador, si es un admin

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    console.log(token);

    if (!token) return res.status(403).json({ message: "No estas autorizado" });

    const decode = jwt.verify(token, config.SECRET);
    req.id_usuario = decode.id;

    const User = await user.getUserById(req.id_usuario, { password: 0 });

    if (!User)
      return res.status(404).json({ message: "ususario no encontrado" });

    next();
  } catch (error) {
    return res.status(401).json({ message: "No autorizado" });
  }
};

export const isModerator = async (req, res, next) => {
  const User = await user.getUserById(req.id_usuario);
  const roles = await Role.getRoleById({ id_role: { $in: usuarios.id_role } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "moderator") {
      next();
      return;
    }
  }
  return res.status(403).json({ message: "Requiere el rol de moderador" });
};

export const isAdmin = async (req, res, next) => {
  const User = await user.getUserById(req.id_usuario);
  const roles = await Role.getRoleById({ id_role: { $in: usuarios.id_role } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin") {
      next();
      return;
    }
  }
  return res.status(403).json({ message: "Requiere el rol de admin" });
};
