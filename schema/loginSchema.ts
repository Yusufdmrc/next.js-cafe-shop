import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .required("Email gereklidir.")
    .email("Geçersiz bir email."),
  password: Yup.string()
    .required("Şifre gereklidir.")
    .min(8, "Şifre en az 8 karakterden oluşmalıdır.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Şifre en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir."
    ),
});
