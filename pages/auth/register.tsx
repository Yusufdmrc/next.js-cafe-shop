import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { registerSchema } from "@/schema/regsiterSchema";
import { useFormik } from "formik";
import styles from "./register.module.css";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

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

const register: React.FC = () => {
  const onSubmit = async (values: any, actions: any) => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
        values
      );
      if (res.status === 200) {
        toast.success("Kullanıcı oluşturuldu.");
      }
    } catch (err) {
      toast.error("Kullanıcı oluşturulamadı");
      console.log(err);
    }

    actions.resetForm();
  };

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: registerSchema,
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
      name: "password",
      type: "password",
      placeholder: "Şifreniz",
      value: values.password,
      error: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Şifrenizi tekrar giriniz",
      value: values.confirmPassword,
      error: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Title>Kayıt Ol</Title>
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
        <div className={styles.buttons}>
          <button className="button" type="submit">
            Kayıt Ol
          </button>
          <Link href="/auth/login">
            <span className={styles.buttonSpan}>Hesabınız var mı?</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default register;
