import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/user";
import Role from "../models/Role";

// esta funcion es para confirmar que el usuario nos esta enviando su token 
// y va a verificar si nos esta mandando un token, si es moderador, si es un admin

export const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) return res.status(403).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;

    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({ message: "No user found" });

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
};


export const isModerator = async (req, res, next) => {
  const User = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: User.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "moderator") {
      next();
      return;
    }
  }
  return res.status(403).json({ message: "Requiere el rol de moderador" });
};

export const isAdmin = async (req, res, next) => {
  const User = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: User.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin") {
      next();
      return;
    }
  }
  return res.status(403).json({ message: "Requiere el rol de admin" });
};
