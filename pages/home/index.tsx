import React from "react";
import styles from "./home.module.css";
import Carousel from "@/components/Carousel";
import Discounts from "@/components/Discounts";
import Menu from "@/components/menu/Menu";
import About from "@/components/About";
import Reservation from "@/components/Reservation";

interface Category {
  _id: string;
  title: string;
}

interface Product {
  _id: string;
  category: string;
}

interface IndexProps {
  categoryList: Category[];
  productList: Product[];
}

const Index: React.FC<IndexProps> = ({ categoryList, productList }) => {
  return (
    <div className={styles.home}>
      <Carousel />
      <Discounts />
      <Menu categoryList={categoryList} productList={productList} />
      <About />
      <Reservation />
    </div>
  );
};

export default Index;
