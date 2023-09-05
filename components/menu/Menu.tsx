import styles from "../../styles/menu/Menu.module.css";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const Menu: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title addClass="title">Menümüz</Title>
        <div className={styles.buttons}>
          <button className={styles.mainButton}>Hepsi</button>
          <button className={styles.button}>Yemek</button>
          <button className={styles.button}>Tatlı</button>
          <button className={styles.button}>Kahve</button>
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
