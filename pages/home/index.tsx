import React from "react";
import styles from "./home.module.css";
import Carousel from "@/components/ui/Carousel";
import Discounts from "@/components/ui/Discounts";

const Index = () => {
  return (
    <div className={styles.home}>
      <Carousel />
      <Discounts />
    </div>
  );
};

export default Index;
