import React, { useEffect, useState, ChangeEvent } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import styles from "../../styles/admin/addProduct.module.css";
import { MdCancel } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

interface SearchModalProps {
  setIsProductModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProduct: React.FC<SearchModalProps> = ({ setIsProductModal }) => {
  const [file, setFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [category, setCategory] = useState<string>("hamburger");
  const [prices, setPrices] = useState<number[]>([]);

  const [extra, setExtra] = useState<{ text: string; price: number }>({
    text: "",
    price: 0,
  });
  const [extraOptions, setExtraOptions] = useState<
    { text: string; price: number }[]
  >([]);

  const [categories, setCategories] = useState<
    { _id: string; title: string }[]
  >([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get<{ _id: string; title: string }[]>(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  const handleExtra = () => {
    if (extra.text && extra.price) {
      setExtraOptions((prev) => [...prev, extra]);
      setExtra({ text: "", price: 0 });
    }
  };

  const handleOnChange = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = changeEvent.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onloadend = (onLoadEvent) => {
        setImageSrc(onLoadEvent.target?.result as string);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const changePrice = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const currentPrices = [...prices];
    currentPrices[index] = parseFloat(e.target.value);
    setPrices(currentPrices);
  };

  const handleCreate = async () => {
    if (!file) {
      toast.error("Lütfen bir resim seçin");
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "cafe-shop");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/yusufdmrc/image/upload",
        data
      );
      const { url } = uploadRes.data;

      const newProduct = {
        img: url,
        title,
        desc,
        category: category.toLowerCase(),
        prices,
        extraOptions,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/products`,
        newProduct
      );

      if (res.status === 201) {
        setIsProductModal(false);
        toast.success("Ürün başarıyla oluşturuldu!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.productModal}>
      <OutsideClickHandler onOutsideClick={() => setIsProductModal(false)}>
        <div className={styles.grid}>
          <div className={styles.searchTitle}>
            <Title addClass={styles.addProductTitle}>Yeni Ürün Ekle</Title>
            <div className={styles.addSection}>
              <label className={styles.label}>
                <input
                  type="file"
                  onChange={handleOnChange}
                  className={styles.input}
                />
                <button className={`button ${styles.btn} `}>Dosya Seç</button>
                {imageSrc && (
                  <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageSrc}
                      alt="image"
                      className={styles.fileImage}
                    />
                  </div>
                )}
              </label>
            </div>

            <div className={styles.addSection}>
              <span className={styles.span}>Başlık</span>
              <input
                type="text"
                className={styles.titleText}
                placeholder="Başlık yazınız"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className={styles.addSection}>
              <span className={styles.span}>Açıklama</span>
              <textarea
                className={styles.textarea}
                placeholder="Açıklama yazınız"
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>

            <div className={styles.addSection}>
              <span className={styles.span}>Kategori Seçiniz</span>
              <select
                placeholder="Kategori seçiniz"
                className={styles.categorySelect}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.length > 0 &&
                  categories.map((category) => (
                    <option
                      value={category.title.toLowerCase()}
                      key={category._id}
                    >
                      {category.title}
                    </option>
                  ))}
              </select>
            </div>

            <div className={styles.addSize}>
              <span className={styles.span}>Boyut</span>
              {category === "hamburger" ? (
                <div className={styles.inputsSize}>
                  <input
                    type="number"
                    className={styles.inputSize}
                    placeholder="small"
                    onChange={(e) => changePrice(e, 0)}
                  />
                  <input
                    type="number"
                    className={styles.inputSize}
                    placeholder="medium"
                    onChange={(e) => changePrice(e, 1)}
                  />
                  <input
                    type="number"
                    className={styles.inputSize}
                    placeholder="large"
                    onChange={(e) => changePrice(e, 2)}
                  />
                </div>
              ) : (
                <div className={styles.inputsSize}>
                  <input
                    type="number"
                    className={styles.inputSize}
                    placeholder="small"
                    onChange={(e) => changePrice(e, 0)}
                  />
                </div>
              )}
            </div>

            <div className={styles.addSize}>
              <span className={styles.span}>Ekstra</span>
              <div className={styles.inputExtra}>
                <input
                  type="text"
                  placeholder="malzeme"
                  className={styles.inputSize}
                  name="text"
                  onChange={(e) =>
                    setExtra({ ...extra, [e.target.name]: e.target.value })
                  }
                  value={extra.text}
                />
                <input
                  type="number"
                  placeholder="fiyat"
                  className={styles.inputSize}
                  name="price"
                  onChange={(e) =>
                    setExtra({ ...extra, [e.target.name]: e.target.value })
                  }
                  value={extra.price}
                />
                <button className="button" onClick={handleExtra}>
                  Add
                </button>
              </div>
              <div className={styles.ingredients}>
                {extraOptions.map((item, index) => (
                  <span
                    className={styles.extraOptions}
                    key={index}
                    onClick={() => {
                      setExtraOptions(
                        extraOptions.filter((_, i) => i !== index)
                      );
                    }}
                  >
                    {item.text}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.create}>
              <button className={styles.createButton} onClick={handleCreate}>
                Oluştur
              </button>
            </div>
            <button
              className={styles.cancelButton}
              onClick={() => setIsProductModal(false)}
            >
              <MdCancel size={25} />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default AddProduct;
