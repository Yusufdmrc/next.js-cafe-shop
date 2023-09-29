import Image from "next/image";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import Title from "./ui/Title";
import styles from "../styles/DiscountProduct.module.css";

const DiscountProduct: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/images/discount.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={styles.content}>
        <Title addClass={styles.title}> Great Friday</Title>
        <div className={styles.spans}>
          <span className={styles.percent}>20%</span>
          <span className={styles.off}>Off</span>
        </div>
        <button className={styles.btn}>
          Order Now <HiShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

export default DiscountProduct;
