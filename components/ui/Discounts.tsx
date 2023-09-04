import DiscountProduct from "./DiscountProduct";
import styles from "../../styles/ui/Discounts.module.css";

const Discounts = () => {
  return (
    <div className={styles.container}>
      <DiscountProduct />
      <DiscountProduct />t
    </div>
  );
};

export default Discounts;
