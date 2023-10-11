import React, { useEffect, useState, ChangeEvent } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import styles from "../../styles/ui/SearchModal.module.css";
import Image from "next/image";
import { RiCloseCircleFill } from "react-icons/ri";
import { useRouter } from "next/router";
import axios from "axios";
import Input from "../form/Input";

interface Product {
  _id: string;
  title: string;
  img: string;
  prices: number[];
}

interface SearchModalProps {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  isModal: boolean;
}

const SearchModal: React.FC<SearchModalProps> = ({ setIsModal, isModal }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get<Product[]>(
          `${process.env.NEXT_PUBLIC_API_URL}/products`
        );
        setProducts(res.data);
        setFiltered(res.data.slice(0, 5));
      } catch (err) {
        console.log(err);
      }
    };
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchFilter = products
      .filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
      .slice(0, 5);
    setFiltered(searchFilter);
  };

  return (
    <div className={styles.searchModal}>
      <OutsideClickHandler onOutsideClick={() => setIsModal(!isModal)}>
        <div className={styles.grid}>
          <div className={styles.searchTitle}>
            <Title addClass={styles.hidden}>Search</Title>
            <Input placeholder="Arayın" onChange={handleSearch} />
            <div>
              {products.length > 0 ? (
                <ul className={styles.ul}>
                  {filtered.length > 0
                    ? filtered.map((product) => (
                        <li
                          className={styles.searchContainer}
                          key={product._id}
                          onClick={() => {
                            router.push(`/productDetail/${product._id}`);
                            setIsModal(false);
                          }}
                        >
                          <div className={styles.searchImage}>
                            <Image
                              width={48}
                              height={48}
                              src={product.img}
                              alt={product.title}
                              priority
                            />
                          </div>
                          <span className={styles.span}>{product.title}</span>
                          <span className={styles.span}>
                            ${product.prices[0]}
                          </span>
                        </li>
                      ))
                    : "Ürün bulunamadı"}
                </ul>
              ) : (
                ""
              )}
              <a
                onClick={() => setIsModal(!isModal)}
                className={styles.closeIcon}
              >
                <RiCloseCircleFill size={30} />
              </a>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default SearchModal;
