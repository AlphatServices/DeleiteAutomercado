import { z } from "zod";

export const schema = z.object({
  email: z.string().refine(
    (value) =>
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) || // Valida correo electrónico
      /^(0412|0414|0416|0424|0426)\d{7}$/.test(value),
    {
      message: "Debe ser un correo electrónico o un número de teléfono válido",
    }
  ),
  password: z
    .string()
    .min(8, "Debe contener mínimo 8 caracteres")
    .regex(/[A-Z]/, "Debe contener mínimo una letra mayúscula")
    .regex(/\d/, "Debe contener mínimo un número")
    .regex(/[\W_]/, "Debe contener mínimo un carácter especial"),
});
