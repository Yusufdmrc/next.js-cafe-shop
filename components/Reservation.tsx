import Input from "./form/Input";
import Title from "./ui/Title";
import styles from "../styles/Reservation.module.css";
import { useFormik } from "formik";
import { reservationSchema } from "@/schema/reservationSchema";

interface InputProps {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | undefined;
  touched: boolean | undefined;
}

const Reservation: React.FC = () => {
  const onSubmit = async (values: any, actions: any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phoneNo: "",
        persons: "",
        date: "",
      },
      onSubmit,
      validationSchema: reservationSchema,
    });

  const inputProp: InputProps[] = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "İsminiz",
      value: values.name,
      error: errors.name,
      touched: touched.name,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Mail Adresiniz",
      value: values.email,
      error: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "phoneNo",
      type: "number",
      placeholder: "Telefon Numaranız",
      value: values.phoneNo,
      error: errors.phoneNo,
      touched: touched.phoneNo,
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "Kişi sayısı",
      value: values.persons,
      error: errors.persons,
      touched: touched.persons,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      placeholder: "Tarih",
      value: values.date,
      error: errors.date,
      touched: touched.date,
    },
  ];

  return (
    <div className={styles.container}>
      <Title addClass={styles.title}>Rezervasyon</Title>
      <div className={styles.inputContainer}>
        <form className={styles.inputWrapper} onSubmit={handleSubmit}>
          <div className={styles.inputs}>
            {inputProp.map((input) => (
              <Input
                key={input.id}
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
          </div>
          <button className="button" type="submit">
            Rezervasyon Yap
          </button>
        </form>
        <div className={styles.iframeContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.32111775654!2d28.68252443534537!3d41.00537020640809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1694112649178!5m2!1str!2str"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className={styles.iframe}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
