import { Schema, model} from "mongoose";

const productSchema = new Schema(
  {
    precio: {
      type: sql.Int,
      required: true,
      trim: true,
    },
    descripcion: {
      type: sql.NVarChar,
      required: true,
    },
    foto: {
      imgURL: sql.NVarChar,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Product", productSchema);
