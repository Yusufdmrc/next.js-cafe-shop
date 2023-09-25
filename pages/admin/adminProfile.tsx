import Image from "next/image";
import styles from "./admin.module.css";
import { FaKey, FaMotorcycle } from "react-icons/fa";
import { GrCafeteria } from "react-icons/gr";
import { BiSolidCategory } from "react-icons/bi";
import { ImExit } from "react-icons/im";
import { useState } from "react";

import Order from "@/components/admin/Order";
import ProductList from "@/components/admin/ProductList";
import Category from "@/components/admin/Category";
import Footer from "@/components/admin/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const adminProfile: React.FC = () => {
  const [tabs, setTabs] = useState<number>(0);
  const { push } = useRouter();

  const closeAdmin = async () => {
    try {
      if (confirm("Admin panelinden çıkmak istiyor musunuz?")) {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
        if (res.status === 200) {
          push("/admin");
          toast.success("Admin paneli kapatıldı");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.image}>
          <Image
            src="/images/admin.png"
            alt=""
            width={100}
            height={100}
            className={styles.img}
          />
          <b className={styles.name}>Admin</b>
        </div>
        <ul className={styles.ul}>
          <li
            onClick={() => setTabs(0)}
            className={`${styles.li} ${tabs === 0 && styles.liActive}`}
          >
            <GrCafeteria />
            <button className={styles.btn}>Ürünler</button>
          </li>
          <li
            onClick={() => setTabs(1)}
            className={`${styles.li} ${tabs === 1 && styles.liActive}`}
          >
            <FaMotorcycle />
            <button className={styles.btn}>Siparişler</button>
          </li>
          <li
            onClick={() => setTabs(2)}
            className={`${styles.li} ${tabs === 2 && styles.liActive}`}
          >
            <BiSolidCategory />
            <button className={styles.btn}>Kategoriler</button>
          </li>

          <li
            onClick={() => setTabs(3)}
            className={`${styles.li} ${tabs === 3 && styles.liActive}`}
          >
            <FaKey />
            <button className={styles.btn}>Footer</button>
          </li>

          <li
            onClick={closeAdmin}
            className={`${styles.li} ${tabs === 4 && styles.liActive}`}
          >
            <ImExit />
            <button className={styles.btn}>Çıkış</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <ProductList />}
      {tabs === 1 && <Order />}
      {tabs === 2 && <Category />}
      {tabs === 3 && <Footer />}
    </div>
  );
};

export const getServerSideProps = (context) => {
  const myCookie = context.req?.cookies || "";
  if (myCookie.token !== process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default adminProfile;
