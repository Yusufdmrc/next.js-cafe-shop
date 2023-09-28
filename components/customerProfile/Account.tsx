import { customerProfileSchema } from "@/schema/customerProfileSchema";
import Input from "../form/Input";
import Title from "../ui/Title";
import { useFormik } from "formik";
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
interface AccountProps {
  user: {
    name: string;
    email: string;
    phoneNo: string;
    address: string;
    job: string;
    bio: string;
  } | null;
}

const Account: React.FC<AccountProps> = ({ user }) => {
  const onSubmit = async (values: any, actions: any) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
        values
      );
    } catch (err) {
      console.log(err);
    }
    actions.resetForm();
  };

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        name: user?.name,
        email: user?.email,
        phoneNo: user?.phoneNo,
        address: user?.address,
        job: user?.job,
        bio: user?.bio,
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
      <button className="button" type="submit">
        Güncelle
      </button>
    </form>
  );
};

export default Account;
