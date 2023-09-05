import React from "react";
import styles from "./home.module.css";
import Carousel from "@/components/ui/Carousel";
import Discounts from "@/components/ui/Discounts";
import Menu from "@/components/menu/Menu";

const Index = () => {
  return (
    <div className={styles.home}>
      <Carousel />
      <Discounts />
      <Menu />
    </div>
  );
};

export default Index;
