import { useEffect, useState } from "react";
import styles from "../../styles/admin/order.module.css";
import axios from "axios";

interface OrderItem {
  _id: string;
  customer: string;
  total: number;
  method: number;
  status: number;
  createdAt: string;
}

const Order: React.FC = () => {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const status = ["hazırlanıyor", "yolda", "teslim edildi"];

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get<OrderItem[]>(
          `${process.env.NEXT_PUBLIC_API_URL}/orders`
        );
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);

  const handleStatus = async (id: string) => {
    const item = orders.find((order) => order._id === id);
    const currentStatus = item?.status || 0;

    try {
      const res = await axios.put<OrderItem>(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`,
        {
          status: currentStatus + 1,
        }
      );
      setOrders([res.data, ...orders.filter((order) => order._id !== id)]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th} scope="col">
                ÜRÜN ID
              </th>
              <th className={styles.th} scope="col">
                MÜŞTERİ
              </th>
              <th className={styles.th} scope="col">
                TOPLAM
              </th>
              <th className={styles.th} scope="col">
                ÖDEME
              </th>
              <th className={styles.th} scope="col">
                DURUM
              </th>
              <th className={styles.th} scope="col">
                EYLEM
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 &&
              orders
                .sort(
                  (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                )
                .map((order) => (
                  <tr className={styles.imageTr} key={order._id}>
                    <td>{order._id.substring(0, 6)}...</td>
                    <td className={styles.extras}>
                      <span>{order.customer}</span>
                    </td>
                    <td className={styles.price}>{order.total}</td>
                    <td className={styles.amount}>
                      {order.method === 0 ? "Nakit" : "Card"}
                    </td>
                    <td className={styles.amount}>{status[order.status]}</td>
                    <td className={styles.status}>
                      <button
                        className="button"
                        onClick={() => handleStatus(order._id)}
                        disabled={order.status > 1}
                      >
                        Sonraki Aşama
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
