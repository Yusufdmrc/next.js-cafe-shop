import Image from "next/image";
import styles from "./productDetail.module.css";
import Title from "@/components/ui/Title";
import { useState } from "react";
import { addProduct } from "@/redux/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Index = ({ food }) => {
  const [prices, setPrices] = useState<number[]>(food.prices);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState<number>(0);
  const [items, setItems] = useState<ExtraItem[]>(food?.extraOptions);
  const [extras, setExtras] = useState<ExtraItem[]>([]);

  const basket = useSelector((state: any) => state.basket);
  const dispatch = useDispatch();

  const handleSize = (index: number) => {
    const difference = prices[index] - prices[size];
    setSize(index);
    console.log(price);
    changePrice(difference);
  };

  const changePrice = (number: number) => {
    setPrice(price + number);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: ExtraItem
  ) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(item.price);
      setExtras([...extras, item]);
    } else {
      changePrice(-item.price);
      setExtras(extras.filter((extra) => extra.id !== item.id));
    }
  };

  console.log(basket);

  const handleClick = () => {
    dispatch(addProduct({ ...food, extras, price, quantity: 1 }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={food?.img}
          alt="productImage"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className={styles.content}>
        <Title>{food?.title}</Title>
        <span className={styles.contentSpan}>{price}TL</span>
        <p className={styles.contentP}>{food?.desc}</p>
        {food.category === "hamburger" && (
          <div className={styles.labelWrapper}>
            <div>
              <label className={styles.label} onClick={() => handleSize(0)}>
                <input className={styles.labelInput} type="radio" name="size" />
                <span className={styles.labelSpan}>Küçük Boy</span>
              </label>
            </div>
            <div>
              <label className={styles.label} onClick={() => handleSize(1)}>
                <input className={styles.labelInput} type="radio" name="size" />
                <span className={styles.labelSpan}>Orta Boy</span>
              </label>
            </div>
            <div>
              <label className={styles.label} onClick={() => handleSize(2)}>
                <input className={styles.labelInput} type="radio" name="size" />
                <span className={styles.labelSpan}>Büyük Boy</span>
              </label>
            </div>
          </div>
        )}
        <div className={styles.labelContainer}>
          {items.map((item) => (
            <label className={styles.label} key={item._id}>
              <input
                className={styles.labelInput}
                type="radio"
                name="ext"
                onChange={(e) => handleChange(e, item)}
              />
              <span className={styles.labelSpan}>{item.text}</span>
            </label>
          ))}
        </div>
      </div>
      <button className={`button ${styles.btn}`} onClick={handleClick}>
        Sepete Ekle
      </button>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`
  );
  return {
    props: {
      food: res.data ? res.data : null,
    },
  };
};

export default Index;
