import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .required("Email gereklidir.")
    .email("Geçersiz bir email."),
  password: Yup.string().required("Şifre gereklidir."),
});
