import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import styles from "../../styles/admin/addProduct.module.css";

import { MdCancel } from "react-icons/md";

interface SearchModalProps {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  isModal: boolean;
}

const AddProduct: React.FC<SearchModalProps> = ({ setIsProductModal }) => {
  return (
    <div className={styles.productModal}>
      <OutsideClickHandler onOutsideClick={() => setIsProductModal(false)}>
        <div className={styles.grid}>
          <div className={styles.searchTitle}>
            <Title addClass={styles.addProductTitle}>Yeni Ürün Ekle</Title>
            <div className={styles.addSection}>
              <span className={styles.span}>Resim Seç</span>
              <input type="file" />
            </div>

            <div className={styles.addSection}>
              <span className={styles.span}>Başlık</span>
              <input
                type="text"
                className={styles.titleText}
                placeholder="Başlık yazınız"
              />
            </div>

            <div className={styles.addSection}>
              <span className={styles.span}>Açıklama</span>
              <textarea
                className={styles.textarea}
                placeholder="Açıklama yazınız"
              ></textarea>
            </div>

            <div className={styles.addSection}>
              <span className={styles.span}>Kategori Seçiniz</span>
              <select
                placeholder="Kategori seçiniz"
                className={styles.categorySelect}
              >
                <option value="1">Kategori 1</option>
                <option value="1">Kategori 2</option>
                <option value="1">Kategori 3</option>
                <option value="1">Kategori 4</option>
              </select>
            </div>

            <div className={styles.addSize}>
              <span className={styles.span}>Boyut</span>
              <div className={styles.inputsSize}>
                <input
                  type="number"
                  placeholder="small"
                  className={styles.inputSize}
                />
                <input
                  type="number"
                  placeholder="medium"
                  className={styles.inputSize}
                />
                <input
                  type="number"
                  placeholder="large"
                  className={styles.inputSize}
                />
              </div>
            </div>

            <div className={styles.addSize}>
              <span className={styles.span}>Ekstra</span>
              <div className={styles.inputExtra}>
                <input
                  type="number"
                  placeholder="malzeme"
                  className={styles.inputSize}
                />
                <input
                  type="number"
                  placeholder="fiyat"
                  className={styles.inputSize}
                />
                <button className="button">Add</button>
              </div>
              <div className={styles.ingredients}>
                <span className={styles.ingredient}>Ketçap</span>
              </div>
            </div>

            <div className={styles.create}>
              <button className={styles.createButton}>Oluştur</button>
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
