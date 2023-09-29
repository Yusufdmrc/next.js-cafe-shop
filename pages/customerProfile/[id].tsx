import Image from "next/image";
import styles from "./customerProfile.module.css";
import { FaHome, FaKey, FaMotorcycle } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { useEffect, useState } from "react";
import Account from "@/components/customerProfile/Account";
import Password from "@/components/customerProfile/Password";
import Order from "@/components/customerProfile/Order";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

interface User {
  _id: string;
  name: string;
  image: string;
}

const CustomerProfile: React.FC<{ user: User | null }> = ({ user }) => {
  const { data: session } = useSession();

  const [tabs, setTabs] = useState<number>(0);
  const { push } = useRouter();

  const handleSignOut = () => {
    if (confirm("Çıkmak istiyor musun?")) {
      signOut({ redirect: false });
      push("/auth/login");
    }
  };

  useEffect(() => {
    if (!session) {
      push("/auth/login");
    }
  }, [session, push]);

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.image}>
          <Image
            src={user.image ? user.image : "/images/customer1.jpg"}
            alt=""
            width={100}
            height={100}
            className={styles.img}
            priority
          />
          <b className={styles.name}>{user.name}</b>
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
          <li onClick={handleSignOut} className={`${styles.li}`}>
            <ImExit />
            <button className={styles.btn}>Çıkış</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Account user={user} />}
      {tabs === 1 && <Password user={user} />}
      {tabs === 2 && <Order />}
    </div>
  );
};

export async function getServerSideProps({ req, params }) {
  const user = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`
  );

  return {
    props: { user: user ? user.data : null },
  };
}

export default CustomerProfile;
