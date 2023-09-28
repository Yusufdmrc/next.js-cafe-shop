import React, { useEffect, useState } from "react";
import Input from "../../components/form/Input";
import Title from "@/components/ui/Title";
import Link from "next/link";
import { useFormik } from "formik";
import { loginSchema } from "@/schema/loginSchema";
import styles from "./login.module.css";
import { FaGithub } from "react-icons/fa";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

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

const Login: React.FC = () => {
  const { data: session } = useSession();
  const { push } = useRouter();
  const [currentUser, setCurrentUser] = useState<any>();

  const onSubmit = async (values: any, actions: any) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    try {
      const res = await signIn("credentials", options);
      actions.resetForm();
      // push("/customerProfile/6511ac4b21ece6721d8262b9");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        setCurrentUser(
          res.data?.find((user) => user.email === session?.user?.email)
        );
        push("/customerProfile/" + currentUser?._id);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [session, push, currentUser]);

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

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const user = res.data?.find((user) => user.email === session?.user?.email);

  if (session && user) {
    return {
      redirect: {
        destination: "/customerProfile/" + user._id,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Login;
