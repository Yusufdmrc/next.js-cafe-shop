import { passwordSchema } from "@/schema/passwordSchema";
import { useFormik } from "formik";
import React from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import styles from "../../styles/customerProfile/customerProfile.module.css";
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

interface PasswordProps {
  user: any;
}

const Password: React.FC<PasswordProps> = ({ user }) => {
  const onSubmit = async (values: any, actions: any) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
        values
      );
      actions.resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: passwordSchema,
    });

  const inputProp: InputProps[] = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Şifreniz",
      value: values.password,
      error: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Şifrenizi Onaylayın",
      value: values.confirmPassword,
      error: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Title>Hesap Ayarları</Title>
      <div className={styles.inputs}>
        {inputProp.map((input) => (
          <Input
            key={input.id}
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
      </div>
      <button className="button">Güncelle</button>
    </form>
  );
};

export default Password;
