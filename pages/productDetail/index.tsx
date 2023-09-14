import Image from "next/image";
import styles from "./productDetail.module.css";
import Title from "@/components/ui/Title";
import { useState } from "react";
import { addProduct } from "@/redux/basketSlice";
import { useDispatch, useSelector } from "react-redux";

interface ExtraItem {
  id: number;
  name: string;
  price: number;
}

interface FoodItem {
  id: number;
  name: string;
  price: number;
  desc: string;
  extraOptions: ExtraItem[];
}

const extraItems: ExtraItem[] = [
  {
    id: 1,
    name: "Limonlu",
    price: 20,
  },
  {
    id: 2,
    name: "San Sebastian",
    price: 50,
  },
];

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Cheescake",
    price: 34,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate eveniet dignissimos cupiditate laborum. Minus magni eum et nobis eaque quibusdam?",
    extraOptions: [
      {
        id: 1,
        name: "Extra 1",
        price: 1,
      },
    ],
  },
];

const Index = () => {
  const [prices, setPrices] = useState<number[]>([100, 130, 160]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState<number>(0);
  const [items, setItems] = useState<ExtraItem[]>(extraItems);
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
    dispatch(addProduct({ ...foodItems[0], extras, price, quantity: 1 }));
  };

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
        <span className={styles.contentSpan}>{price}TL</span>
        <p className={styles.contentP}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          eveniet dignissimos cupiditate laborum. Minus magni eum et nobis eaque
          quibusdam?
        </p>
        <div className={styles.labelWrapper}>
          <div>
            <label className={styles.label} onClick={() => handleSize(0)}>
              <input className={styles.labelInput} type="radio" name="size" />
              <span className={styles.labelSpan}>Küçük Boy</span>
            </label>
            <label className={styles.label} onClick={() => handleSize(1)}>
              <input className={styles.labelInput} type="radio" name="size" />
              <span className={styles.labelSpan}>Orta Boy</span>
            </label>
            <label className={styles.label} onClick={() => handleSize(2)}>
              <input className={styles.labelInput} type="radio" name="size" />
              <span className={styles.labelSpan}>Büyük Boy</span>
            </label>
          </div>
          <div className={styles.labelContainer}>
            {items.map((item) => (
              <label className={styles.label} key={item.id}>
                <input
                  className={styles.labelInput}
                  type="radio"
                  name="ext"
                  onChange={(e) => handleChange(e, item)}
                />
                <span className={styles.labelSpan}>{item.name}</span>
              </label>
            ))}
          </div>
        </div>
        <button className={`button ${styles.btn}`} onClick={handleClick}>
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Index;
