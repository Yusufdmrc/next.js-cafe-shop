import React from "react";
import styles from "../../styles/ui/Logo.module.css";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <span className={styles.logo}>Cafe</span>
    </Link>
  );
};

export default Logo;
