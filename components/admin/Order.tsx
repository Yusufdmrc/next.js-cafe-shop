import styles from "../../styles/admin/order.module.css";

const Order = () => {
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
            <tr className={styles.imageTr}>
              <td>31244124123</td>
              <td className={styles.extras}>
                <span>Yusuf Demirci</span>
              </td>
              <td className={styles.price}>200TL</td>
              <td className={styles.amount}>Nakit</td>
              <td className={styles.amount}>Hazırlanıyor</td>
              <td className={styles.status}>
                <button className="button">Sonraki Aşama</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
