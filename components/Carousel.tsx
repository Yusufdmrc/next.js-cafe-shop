import styles from "../styles/Carousel.module.css";
import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => <div className={styles.dots}></div>,
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image
            src="/images/hero.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className={styles.content}>
            <Title>Coffee and dessert shop</Title>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              culpa nulla perferendis debitis obcaecati quam officiis ipsam
              recusandae minus molestias.
            </p>
            <button className="button">Şimdi Sipariş Ver</button>
          </div>
        </div>
        <div>
          <div className={styles.content}>
            <Title>Coffee and dessert shop 2</Title>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              culpa nulla perferendis debitis obcaecati quam officiis ipsam
              recusandae minus molestias.
            </p>
            <button className="button">Şimdi Sipariş Ver</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
