import React from "react";
import Input from "../../components/form/Input";
import Title from "@/components/ui/Title";
import Link from "next/link";
import { useFormik } from "formik";
import { loginSchema } from "@/schema/loginSchema";
import styles from "./login.module.css";
import { FaGithub } from "react-icons/fa";
import { useSession, signIn } from "next-auth/react";

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

const login: React.FC = () => {
  const { data: session } = useSession();

  const onSubmit = async (values: any, actions: any) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);

    // actions.resetForm();
  };

  console.log(session);

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputProp: InputProps[] = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Mail Adresiniz",
      value: values.email,
      error: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Şifreniz",
      value: values.password,
      error: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Title>Giriş Yap</Title>
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
          <button type="submit" className="button">
            Giriş Yap
          </button>
          <button
            type="button"
            onClick={() => signIn("github")}
            className={`button || ${styles.buttonPri}`}
          >
            <i className={styles.github}>
              <FaGithub />
            </i>
            Github
          </button>
          <Link href="/auth/register">
            <span className={styles.buttonSpan}>Hesabınız yok mu?</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default login;
