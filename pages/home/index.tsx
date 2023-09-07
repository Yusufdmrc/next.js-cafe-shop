import React from "react";
import styles from "./home.module.css";
import Carousel from "@/components/Carousel";
import Discounts from "@/components/Discounts";
import Menu from "@/components/menu/Menu";
import About from "@/components/About";
import Reservation from "@/components/Reservation";

const Index = () => {
  return (
    <div className={styles.home}>
      <Carousel />
      <Discounts />
      <Menu />
      <About />
      <Reservation />
    </div>
  );
};

export default Index;
