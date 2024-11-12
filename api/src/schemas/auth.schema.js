import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "El Nombre de usuario es requerido",
  }),
  email: z
    .string({
      required_error: "El Email es requerido",
    })
    .email({
      message: "Email invalido",
    }),
  password: z
    .string({
      required_error: "La Constraseña es requerida",
    })
    .min(6, {
      message: "La Contraseña debe ser de al menos 6 caracteres",
    }),
  roles: z.array(z.string()).optional().default(["user"]),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "El Email es requerido",
    })
    .email({
      message: "Email Invalido",
    }),
  password: z
    .string({
      required_error: "La Contraseña es requerida",
    })
    .min(6, {
      message: "La Contraseña debe tener al menos 6 caracteres",
    }),
});
