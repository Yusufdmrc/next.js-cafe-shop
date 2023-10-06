import Image from "next/image";
import styles from "../../styles/admin/productList.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = async (id) => {
    try {
      if (confirm("Ürünü silmek istiyor musunuz?")) {
        const res = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
        );
        if (res.status === 200) {
          toast.success("Ürün silindi");
          getProducts();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getProducts = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/products`
      );
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
            {products.length > 0 &&
              products.map((product) => (
                <tr key={product._id} className={styles.imageTr}>
                  <td className={styles.imageTd}>
                    <Image
                      alt={product.title}
                      src={product.img}
                      width={50}
                      height={50}
                    />
                  </td>
                  <td className={styles.extras}>
                    <span>{product._id.substring(0, 6)}...</span>
                  </td>
                  <td className={styles.price}>{product.title}</td>
                  <td className={styles.amount}>{product.prices[0]}TL</td>
                  <td className={styles.status}>
                    <button
                      className="button"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
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

export default ProductList;
