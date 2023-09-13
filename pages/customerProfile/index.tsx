import Image from "next/image";
import styles from "./customerProfile.module.css";
import { FaHome, FaKey, FaMotorcycle } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { useState } from "react";
import Account from "@/components/customerProfile/Account";
import Password from "@/components/customerProfile/Password";
import Order from "@/components/customerProfile/Order";

const customerProfile: React.FC = () => {
  const [tabs, setTabs] = useState<number>(0);

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.image}>
          <Image
            src="/images/customer1.jpg"
            alt=""
            width={100}
            height={100}
            className={styles.img}
          />
          <b className={styles.name}>Gleen Smith</b>
        </div>
        <ul className={styles.ul}>
          <li
            onClick={() => setTabs(0)}
            className={`${styles.li} ${tabs === 0 && styles.liActive}`}
          >
            <FaHome />
            <button className={styles.btn}>Hesap Bilgileri</button>
          </li>
          <li
            onClick={() => setTabs(1)}
            className={`${styles.li} ${tabs === 1 && styles.liActive}`}
          >
            <FaKey />
            <button className={styles.btn}>Şifre</button>
          </li>
          <li
            onClick={() => setTabs(2)}
            className={`${styles.li} ${tabs === 2 && styles.liActive}`}
          >
            <FaMotorcycle />
            <button className={styles.btn}>Siparişler</button>
          </li>
          <li
            onClick={() => setTabs(3)}
            className={`${styles.li} ${tabs === 3 && styles.liActive}`}
          >
            <ImExit />
            <button className={styles.btn}>Çıkış</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Account />}
      {tabs === 1 && <Password />}
      {tabs === 2 && <Order />}
    </div>
  );
};

export default customerProfile;
