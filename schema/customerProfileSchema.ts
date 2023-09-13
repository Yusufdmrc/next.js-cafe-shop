import * as Yup from "yup";

export const customerProfileSchema = Yup.object({
  name: Yup.string()
    .required("İsim gereklidir.")
    .min(3, "İsim en az 3 karakter olmalıdır."),
  phoneNo: Yup.string()
    .required("Telefon numarası gereklidir.")
    .min(10, "Telefon numarası en az 10 karakter olmalıdır."),
  email: Yup.string().required("Email gereklidir.").email("Geçersiz email."),
  address: Yup.string().required("Adres gereklidir."),
  job: Yup.string().required("Meslek is gereklidir."),
  bio: Yup.string().required("Biyografi gereklidir."),
});
