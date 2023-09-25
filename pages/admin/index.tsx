import Input from "../../components/form/Input";
import Title from "@/components/ui/Title";
import { useFormik } from "formik";
import { adminSchema } from "@/schema/adminSchema";
import styles from "./login.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

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

const admin: React.FC = () => {
  const { push } = useRouter();

  const onSubmit = async (values: any, actions: any) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin`,
        values
      );
      if (res.status === 200) {
        console.log(res.data);
        actions.resetForm();
        toast.success("Admin Girişi Başarılı");
        push("/admin/adminProfile");
      }
    } catch (err) {
      console.log(err);
    }
    actions.resetForm();
  };

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
      validationSchema: adminSchema,
    });

  const inputProp: InputProps[] = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Kullanıcı Adınız",
      value: values.username,
      error: errors.username,
      touched: touched.username,
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
        <Title>Admin</Title>
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
          <button className="button">Giriş Yap</button>
        </div>
      </form>
    </div>
  );
};

export const getServerSideProps = (context) => {
  const myCookie = context.req?.cookies || "";
  if (myCookie.token === process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin/adminProfile",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default admin;
