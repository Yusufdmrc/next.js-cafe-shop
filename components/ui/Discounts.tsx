import DiscountProduct from "./DiscountProduct";
import styles from "../../styles/ui/Discounts.module.css";

const Discounts: React.FC = () => {
  return (
    <div className={styles.container}>
      <DiscountProduct />
      <DiscountProduct />
    </div>
  );
};

export default Discounts;
