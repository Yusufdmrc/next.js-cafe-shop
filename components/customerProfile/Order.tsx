import Title from "../ui/Title";
import styles from "../../styles/customerProfile/order.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  const { data: session } = useSession();
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/orders`
        );
        setOrders(
          res.data.filter((order) => order.customer === currentUser?.name)
        );
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, [currentUser]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        setCurrentUser(
          res.data.filter((user) => user.email === session.user.email)[0]
        );
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, [session]);

  return (
    <div className={styles.form}>
      <Title>Hesap Ayarları</Title>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th} scope="col">
                ID
              </th>
              <th className={styles.th} scope="col">
                Adres
              </th>
              <th className={styles.th} scope="col">
                Tarih
              </th>
              <th className={styles.th} scope="col">
                Toplam
              </th>
              <th className={styles.th} scope="col">
                Durum
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr className={styles.imageTr} key={order?._id}>
                <td className={styles.imageTd}>
                  <span>12124124214</span>
                </td>
                <td className={styles.extras}>
                  <span>İstanbul</span>
                </td>
                <td className={styles.price}>13/09/2023</td>
                <td className={styles.amount}>200TL</td>
                <td className={styles.status}>Hazırlanıyor</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
