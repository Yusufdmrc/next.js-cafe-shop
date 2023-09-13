import { useState } from "react";
import Input from "../form/Input";
import styles from "../../styles/admin/category.module.css";

const Category = () => {
  const [input, setInput] = useState<string>("");
  const [categories, setCategories] = useState(["pizza"]);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.categoryAdd}>
          <Input
            placeholder="Yeni kategori ekle..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            className="button"
            onClick={() => {
              setCategories([...categories, input]);
              setInput("");
            }}
          >
            Ekle
          </button>
        </div>
        <div className={styles.categories}>
          {categories.map((category, index) => (
            <div key={index} className={styles.categoryDelete}>
              <b>{category}</b>
              <button
                className="button"
                onClick={() => {
                  setCategories(categories.filter((cate) => cate != category));
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
