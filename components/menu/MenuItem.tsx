import Image from "next/image";
import styles from "../../styles/menu/MenuItem.module.css";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

const MenuItem: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Link href="/productDetail">
          <div className={styles.imageWrapper}>
            <Image
              src="/images/menuItem.jpg"
              alt="image"
              layout="fill"
              objectFit="cover"
              className={styles.img}
            />
          </div>
        </Link>
      </div>
      <div className={styles.content}>
        <h4 className={styles.h4}>Cheescake</h4>
        <p className={styles.p}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, cum
          praesentium adipisci qui voluptate suscipit.
        </p>
        <div className={styles.price}>
          <span>150TL</span>
          <button className={styles.button}>
            <LuShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
