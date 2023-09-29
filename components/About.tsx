import Image from "next/image";
import styles from "../styles/About.module.css";
import Title from "./ui/Title";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image
              src="/images/about.jpg"
              alt="about-img"
              layout="fill"
              className={styles.img}
              priority
            />
          </div>
        </div>
        <div className={styles.content}>
          <Title>Max Dessert</Title>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem
            commodi ea nulla molestias laboriosam, recusandae obcaecati odit
            magni sint tenetur eaque debitis consequuntur, laborum hic
            distinctio quam amet harum.
          </p>
          <button className={styles.button}>Daha Fazla</button>
        </div>
      </div>
    </div>
  );
};

export default About;
