import user from "../models/user.js";
import jwt from "jsonwebtoken";
import config from "../config.js";
import Role from "../models/Role.js";

export const signUpHandler = async (req, res) => {
  try {
    const { username, gmail, password, roles } = req.body;

    // Crear un nuevo objeto de usuario

    const newUser = new user({
      username,
      gmail,
      password: user.encryptPassword(password),
    });

    // checkear sus roles

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role.id_role];
    }

    // guardar un objeto de usuario en mongo db
    const savedUser = await newUser.save();
    console.log(savedUser);

    // crear el token
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 86400, //cantidad de segundos que tiene un dia
    });

    res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// esta propiedad "populate" lo que hace es poblarlos, ya que las tablas ya estan relacionadas.

export const signInHandler = async (req, res) => {
  try {
    // requiere un body en el campo email que puede ser tambien el username
    const userFound = await user
      .findOne({ email: req.body.email })
      .populate("roles");

    if (!userFound)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const matchPassword = await user.comparedPassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res
        .status(401)
        .json({ token: null, message: "Contraseña invalida!" });

    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
      expiresIn: 86400,
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};
