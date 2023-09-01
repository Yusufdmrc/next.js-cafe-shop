import React from "react";
import styles from "../../styles/ui/Carousel.module.css";
import Image from "next/image";
import Title from "./Title";

const Carousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image
            src="/images/hero.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles.content}>
        <Title>Coffee and dessert shop</Title>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor culpa
          nulla perferendis debitis obcaecati quam officiis ipsam recusandae
          minus molestias.
        </p>
        <button className="button">Şimdi Sipariş Ver</button>
      </div>
    </div>
  );
};

export default Carousel;
