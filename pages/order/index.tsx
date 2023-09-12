import Image from "next/image";
import styles from "./order.module.css";

const index = () => {
  return (
    <div className={styles.order}>
      <div className={styles.container}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th scope="col" className={styles.th}>
                  Sipariş ID
                </th>
                <th scope="col" className={styles.th}>
                  Müşteri
                </th>
                <th scope="col" className={styles.th}>
                  Adres
                </th>
                <th scope="col" className={styles.th}>
                  Toplam
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tr}>
                <td className={styles.tdId}>124124124f2...</td>
                <td className={styles.td}>Yusuf Demirci</td>
                <td className={styles.td}>İstanbul</td>
                <td className={styles.td}>120TL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.orderBottom}>
          <div className={styles.image}>
            <Image
              src="/images/paid.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Ödeme</span>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/bake.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Hazırlanıyor</span>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/bike.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Yolda</span>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/delivered.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Teslim Edildi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
