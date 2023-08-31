import React, { ReactNode } from "react";
import styles from "../../styles/ui/Title.module.css";

interface TitleProps {
  children: ReactNode;
  addClass?: string;
}

const Title: React.FC<TitleProps> = ({ children, addClass }) => {
  return <div className={`${styles.addClass || ""}`}>{children}</div>;
};

export default Title;
