import * as Yup from "yup";

export const footerSchema = Yup.object({
  email: Yup.string().required("Email gereklidir").email("Geçersiz email"),
  description: Yup.string().required("Açıklama gereklidir."),
  location: Yup.string().required("Konum gereklidir"),
  phoneNo: Yup.string()
    .required("Telefon numarası gereklidir")
    .min(10, "Telefon numarası 10 karakterden az olamaz."),
  day: Yup.string().required("Gün bilgisi gereklidir."),
  time: Yup.string().required("Zaman bilgisi gereklidir."),
});
