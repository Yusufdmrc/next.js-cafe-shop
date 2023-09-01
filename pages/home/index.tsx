import React from "react";
import styles from "./home.module.css";
import Carousel from "@/components/ui/Carousel";

const Index = () => {
  return (
    <div className={styles.home}>
      <Carousel />
    </div>
  );
};

export default Index;
