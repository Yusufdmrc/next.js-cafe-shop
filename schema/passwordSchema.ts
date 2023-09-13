import * as Yup from "yup";

export const passwordSchema = Yup.object({
  password: Yup.string()
    .required("Şifre gereklidir.")
    .min(8, "Şifre en az 8 karakterden oluşmalıdır.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Şifre en az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir."
    ),
  confirmPassword: Yup.string()
    .required("Şifreyi onaylamanız gerekmektedir.")
    .oneOf([Yup.ref("password"), ""], "Şifreler uyuşmuyor."),
});
