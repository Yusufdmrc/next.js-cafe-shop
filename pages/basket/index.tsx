import Image from "next/image";
import styles from "./basket.module.css";
import Title from "@/components/ui/Title";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "@/redux/basketSlice";

const basket: React.FC = () => {
  const basket = useSelector((state:) => state.basket);
  const distpatch = useDispatch();
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
              {basket.products.map((product) => (
                <tr key={product.id} className={styles.imageTr}>
                  <td className={styles.imageTd}>
                    <Image
                      src="/images/menuItem.jpg"
                      width={50}
                      height={50}
                      alt="image"
                    />
                    <span>{product.name}</span>
                  </td>
                  <td className={styles.extras}>
                    {product.extras.map((item) => (
                      <span key={item.id}>{item.name}</span>
                    ))}
                  </td>
                  <td className={styles.price}>{product.price}TL</td>
                  <td className={styles.amount}>{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.basketRight}>
          <Title>SEPET TOPLAMI</Title>
          <div className={styles.baskePrice}>
            <b>Ara Toplam:</b>${basket.total}TL
            <br />
            <b className={styles.discount}>İndirim:</b>0.00TL <br />
            <b>Toplam:</b>${basket.total}
          </div>
          <button className="button" onClick={() => distpatch(reset())}>
            Şimdi Öde
          </button>
        </div>
      </div>
    </div>
  );
};

export default basket;
