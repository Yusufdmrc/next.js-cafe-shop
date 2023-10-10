import Image from "next/image";
import styles from "../../styles/menu/MenuItem.module.css";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

const MenuItem: React.FC = ({ product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Link href={`/productDetail/${product._id}`}>
          <div className={styles.imageWrapper}>
            <Image
              src={product.img}
              alt="image"
              layout="fill"
              objectFit="cover"
              className={styles.img}
              priority
            />
          </div>
        </Link>
      </div>
      <div className={styles.content}>
        <h4 className={styles.h4}>{product.title}</h4>
        <p className={styles.p}>{product.desc}</p>
        <div className={styles.price}>
          <span>{product.prices[0]}TL</span>
          <button className={styles.button}>
            <LuShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
