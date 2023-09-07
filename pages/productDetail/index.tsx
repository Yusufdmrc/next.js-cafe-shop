import Image from "next/image";
import styles from "./productDetail.module.css";
import Title from "@/components/ui/Title";

const Index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/images/menuItem.jpg"
          alt="productImage"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className={styles.content}>
        <Title>Cheescake</Title>
        <span className={styles.contentSpan}>100TL</span>
        <p className={styles.contentP}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          eveniet dignissimos cupiditate laborum. Minus magni eum et nobis eaque
          quibusdam?
        </p>
        <div className={styles.labelContainer}>
          <label className={styles.label}>
            <input className={styles.labelInput} type="checkbox" />
            <span className={styles.labelSpan}>Az Şekerli</span>
          </label>
          <label>
            <input className={styles.labelInput} type="checkbox" />
            <span className={styles.labelSpan}>Çok şekerli</span>
          </label>
        </div>
        <button className="button">Sepete Ekle</button>
      </div>
    </div>
  );
};

export default Index;
