import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required("İsim gereklidir.")
    .min(3, "İsim en az 3 karakter olmalıdır."),
  email: Yup.string().required("Email gereklidir.").email("Geçersiz email."),
  password: Yup.string()
    .required("Şifre gereklidir.")
    .min(8, "Şifre en az 8 karakterden oluşmalıdır.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Şifre en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir."
    ),
  confirmPassword: Yup.string()
    .required("Şifreyi onaylamanız gerekmektedir.")
    .oneOf([Yup.ref("password"), ""], "Şifreler uyuşmuyor."),
});
