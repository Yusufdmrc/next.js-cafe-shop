import Input from "./form/Input";
import Title from "./ui/Title";
import styles from "../styles/Reservation.module.css";

interface InputProps {
  id: number;
  name: string;
  type: string;
  placeholder: string;
}

const Reservation: React.FC = () => {
  const inputProp: InputProps[] = [
    {
      id: 1,
      name: "İsim",
      type: "text",
      placeholder: "İsminiz",
    },
    {
      id: 2,
      name: "Email",
      type: "email",
      placeholder: "Mail Adresiniz",
    },
    {
      id: 3,
      name: "telefonNo",
      type: "number",
      placeholder: "Telefon Numaranız",
    },
    {
      id: 4,
      name: "kişiSayısı",
      type: "number",
      placeholder: "Kişi sayısı",
    },
    {
      id: 5,
      name: "kişiSayısı",
      type: "datetime-local",
      placeholder: "Kişi Sayısı",
    },
  ];

  return (
    <div className={styles.container}>
      <Title addClass={styles.title}>Rezervasyon</Title>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputs}>
            {inputProp.map((input) => (
              <Input key={input.id} {...input} />
            ))}
          </div>
          <button className="button">Rezervasyon Yap</button>
        </div>
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
