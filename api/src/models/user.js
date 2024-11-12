import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // cada usuario tiene un array de roles "{}" significa que es un arreglo de objetos en donde cada objeto
    //tiene una relacion, esa es la manera que tiene mongoose de relacionar los modelos de datos
    // La relacion es de uno a muchos, en donde un usuario puede tener varios roles
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// byscript funciona para encriptar las comtraseñas, lo que realiza primero toma la contraseña y la cifra
//ambos metodos son asincronos por eso usan await

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10); // genera un salto de 10
  return await bcrypt.hash(password, salt); // devuelve un texto cifrado
};

userSchema.methods.comparePassword = async function (password) {
  console.log(password)
  console.log(this.password)
  return await bcrypt.compare(password, this.password);
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  next();
});

export default model("User", userSchema);
