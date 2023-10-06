import { useEffect, useState } from "react";
import styles from "../../styles/menu/Menu.module.css";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

interface MenuProps {
  categoryList: { _id: string; title: string }[];
  productList: { _id: string; category: string }[];
}

const Menu: React.F<MenuProps> = ({ categoryList, productList }) => {
  const [active, setActive] = useState<number>(0);
  const [filter, setFilter] = useState<{ _id: string; category: string }[]>([]);

  useEffect(() => {
    setFilter(
      productList.filter(
        (product) =>
          product.category === categoryList[active].title.toLowerCase()
      )
    );
  }, [productList, categoryList, active]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title addClass="title">Menümüz</Title>
        <div className={styles.buttons}>
          {categoryList &&
            categoryList.map((category, index) => (
              <button
                key={category._id}
                className={`${styles.mainButton} ${
                  index === active && styles.activeButton
                }`}
                onClick={() => setActive(index)}
              >
                {category.title}
              </button>
            ))}
        </div>
      </div>
      <div className={styles.menuItem}>
        {filter.length > 0 &&
          filter.map((product) => (
            <MenuItem key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Menu;
