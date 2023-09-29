import { useState } from "react";
import styles from "../../styles/menu/Menu.module.css";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const Menu: React.FC = ({ categoryList }) => {
  const [active, setActive] = useState(0);
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
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default Menu;
