import Role from "../models/Role.js";
import { ADMIN_EMAIL, ADMIN_USERNAME, ADMIN_PASSWORD } from "../config";
import user from "../models/user.js";

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    //ejecuta toda las promesas al mismo tiempo para poder ganar rendimiento en el servidor

    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const createAdmin = async () => {
  // revisa por un usuario administrador ya creado
  const userFound = await user.findOne({ email: ADMIN_EMAIL });
  console.log(userFound);
  if (userFound) return;

  // obtiene los id de cada rol
  const roles = await Role.find({ name: { $in: ["admin", "moderator"] } });

  // crear un nuevo usuario adminsitrador
  const newUser = await user.create({
    username: ADMIN_USERNAME,
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
    roles: roles.map((role) => role._id),
  });

  console.log("Nuevo usuario creado: ${newUser.email}");
};



