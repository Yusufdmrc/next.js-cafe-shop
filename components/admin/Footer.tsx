import { footerSchema } from "@/schema/footerSchema";
import { useFormik } from "formik";
import { useState } from "react";
import Input from "../form/Input";
import styles from "../../styles/admin/footer.module.css";

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

const Footer = () => {
  const [linkAddress, setLinkAddress] = useState<string>("");
  const [iconName, setIconName] = useState<string>("");
  const [icons, setIcons] = useState([
    "fa fa-facebook",
    "fa fa-twitter",
    "fa fa-instagram",
  ]);

  const onSubmit = async (values: any, actions: any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        location: "",
        phoneNo: "",
        description: "",
        time: "",
        day: "",
      },
      onSubmit,
      validationSchema: footerSchema,
    });

  const inputProp: InputProps[] = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Konumunuz",
      value: values.location,
      error: errors.location,
      touched: touched.location,
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
      name: "description",
      type: "text",
      placeholder: "Açıklama",
      value: values.description,
      error: errors.description,
      touched: touched.description,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Gün",
      value: values.day,
      error: errors.day,
      touched: touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Zaman",
      value: values.time,
      error: errors.time,
      touched: touched.time,
    },
  ];

  return (
    <form className={styles.form}>
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
      <div className={styles.link}>
        <div className={styles.linkInput}>
          <Input placeholder="Link Adresi" value="https://" onChange="" />
          <Input
            placeholder="Icon adı"
            defaultValue="fa fa-"
            onChange={(e) => setIconName(e.target.value)}
            value={iconName}
          />
          <button
            className={`button ${styles.add}`}
            type="button"
            onClick={() => {
              setIcons([...icons, iconName]);
              setIconName("fa fa-");
            }}
          >
            Ekle
          </button>
        </div>
        <ul className={styles.iconsContainer}>
          {icons.map((icon, index) => (
            <li key={index} className={styles.icons}>
              <i className={`${icon}`}></i>
              <button
                className="button"
                type="button"
                onClick={() => {
                  setIcons((prev) => prev.filter((item, i) => i !== index));
                }}
              >
                <i className="fa fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button className={`button || ${styles.update}`}>Güncelle</button>
    </form>
  );
};

export default Footer;
