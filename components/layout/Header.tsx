import Logo from "../ui/Logo";
import styles from "../../styles/layout/Header.module.css";
import { BiSolidUser } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { ImSearch } from "react-icons/im";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Logo />
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="">Ana Sayfa</a>
            </li>
            <li className={styles.li}>
              <a href="">Menü</a>
            </li>
            <li className={styles.li}>
              <a href="">Hakkımızda</a>
            </li>
            <li className={styles.li}>
              <a href=""></a>
            </li>
          </ul>
        </nav>
        <div className={styles.icons}>
          <a href="#">
            <BiSolidUser />
          </a>
          <a href="#">
            <FaShoppingCart />
          </a>
          <a href="#">
            <ImSearch />
          </a>
          <div className={styles.btn}>
            <a href="#">
              <button className="button">Sipariş Ver</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
