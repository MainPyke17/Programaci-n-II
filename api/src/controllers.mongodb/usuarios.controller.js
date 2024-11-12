import user from "../models/user.js";
import Role from "../models/Role";

export const createUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // para crear un nuevo usuario

    const User = new user({
      username,
      email,
      password,
      roles: rolesFound.map((role) => role._id),
    });

    // codigo para encriptar contraseña

    User.password = await user.encryptPassword(User.password);

    // codigo para guardar los usuarios creados

    const savedUser = await User.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      roles: savedUser.roles,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async (req, res) => {
  const users = await user.find();
  return res.json(users);
};

export const getUser = async (req, res) => {
  const User = await user.findById(req.params.userId);
  return res.json(user);
};
