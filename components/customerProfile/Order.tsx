import Title from "../ui/Title";
import styles from "../../styles/customerProfile/order.module.css";

const Order = () => {
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
            <tr className={styles.imageTr}>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
