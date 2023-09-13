import { passwordSchema } from "@/schema/passwordSchema";
import { useFormik } from "formik";
import React from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import styles from "../../styles/customerProfile/customerProfile.module.css";

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

const Password = () => {
  const onSubmit = async (values: any, actions: any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
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
