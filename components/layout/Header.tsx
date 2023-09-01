import Logo from "../ui/Logo";
import styles from "../../styles/layout/Header.module.css";
import { BiSolidUser } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import SearchModal from "../ui/SearchModal";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseCircleFill } from "react-icons/ri";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isHamburgerMenu, setIsHamburgerMenu] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div
      className={`${styles.container} ${
        router.asPath === "/" ? styles.transparent : styles.secondary
      }`}
    >
      <div className={styles.navbar}>
        <Logo />
        <nav
          className={`${styles.nav} ${
            isHamburgerMenu === true && styles.navHidden
          } `}
        >
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
          <a onClick={() => setIsModal(!isModal)} href="#">
            <ImSearch />
          </a>
          <a
            className={styles.hamburger}
            onClick={() => setIsHamburgerMenu(!isHamburgerMenu)}
          >
            <GiHamburgerMenu />
          </a>
          {isHamburgerMenu && (
            <a
              onClick={() => setIsHamburgerMenu(!isHamburgerMenu)}
              className={styles.closeIcon}
            >
              <RiCloseCircleFill size={18} />
            </a>
          )}
          <div className={styles.btn}>
            <a href="#">
              <button className="button">Sipariş Ver</button>
            </a>
          </div>
        </div>
      </div>
      {isModal && <SearchModal isModal={isModal} setIsModal={setIsModal} />}
    </div>
  );
};

export default Header;
