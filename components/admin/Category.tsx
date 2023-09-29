import { useEffect, useState } from "react";
import Input from "../form/Input";
import styles from "../../styles/admin/category.module.css";
import axios from "axios";

interface Category {
  _id: string;
  title: string;
}

const Category: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        setCategories(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  const handleCreate = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        { title: input }
      );
      setCategories([...categories, res.data]);
      setInput("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`);
      setCategories(categories.filter((cate) => cate._id !== id));
      setInput("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.categoryAdd}>
          <Input
            placeholder="Yeni kategori ekle..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button className="button" onClick={handleCreate}>
            Ekle
          </button>
        </div>
        <div className={styles.categories}>
          {categories.map((category) => (
            <div key={category._id} className={styles.categoryDelete}>
              <b>{category.title}</b>
              <button
                className="button"
                onClick={() => handleDelete(category._id)}
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
