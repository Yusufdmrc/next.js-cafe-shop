import Image from "next/image";
import styles from "./basket.module.css";
import Title from "@/components/ui/Title";

const basket: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.basketLeft}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th} scope="col">
                  Ürün
                </th>
                <th className={styles.th} scope="col">
                  Ekstralar
                </th>
                <th className={styles.th} scope="col">
                  Fiyat
                </th>
                <th className={styles.th} scope="col">
                  Adet
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.imageTr}>
                <td className={styles.imageTd}>
                  <Image
                    src="/images/menuItem.jpg"
                    width={50}
                    height={50}
                    alt="image"
                  />
                  <span>Cheescake</span>
                </td>
                <td className={styles.extras}>
                  <span>az şekerli</span>
                </td>
                <td className={styles.price}>100TL</td>
                <td className={styles.amount}>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.basketRight}>
          <Title>SEPET TOPLAMI</Title>
          <div className={styles.baskePrice}>
            <b>Ara Toplam:</b>100TL <br />
            <b className={styles.discount}>İndirim:</b>0.00TL <br />
            <b>Toplam:</b>100TL
          </div>
          <button className="button">Şimdi Öde</button>
        </div>
      </div>
    </div>
  );
};

export default basket;
