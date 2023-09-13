import Image from "next/image";
import styles from "../../styles/admin/productList.module.css";
import Title from "../ui/Title";

const ProductList = () => {
  return (
    <div className={styles.form}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th} scope="col">
                RESİM
              </th>
              <th className={styles.th} scope="col">
                ID
              </th>
              <th className={styles.th} scope="col">
                BAŞLIK
              </th>
              <th className={styles.th} scope="col">
                FİYAT
              </th>
              <th className={styles.th} scope="col">
                DURUM
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.imageTr}>
              <td className={styles.imageTd}>
                <Image alt="" src="/images/about.jpg" width={50} height={50} />
              </td>
              <td className={styles.extras}>
                <span>1241241241</span>
              </td>
              <td className={styles.price}>Oreo</td>
              <td className={styles.amount}>200TL</td>
              <td className={styles.status}>
                <button className="button">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
