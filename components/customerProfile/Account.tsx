import { customerProfileSchema } from "@/schema/customerProfileSchema";
import Input from "../form/Input";
import Title from "../ui/Title";
import { useFormik } from "formik";
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

const Account = () => {
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
        address: "",
        job: "",
        bio: "",
      },
      onSubmit,
      validationSchema: customerProfileSchema,
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
      name: "address",
      type: "text",
      placeholder: "Adresiniz",
      value: values.address,
      error: errors.address,
      touched: touched.address,
    },
    {
      id: 5,
      name: "job",
      type: "text",
      placeholder: "Mesleğiniz",
      value: values.job,
      error: errors.job,
      touched: touched.job,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Biyografiniz",
      value: values.bio,
      error: errors.bio,
      touched: touched.bio,
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

export default Account;
