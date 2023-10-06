import Menu from "@/components/menu/Menu";
import axios from "axios";
import React from "react";

interface Category {
  _id: string;
  title: string;
}

interface Product {
  _id: string;
  category: string;
}

interface IndexProps {
  categoryList: Category[];
  productList: Product[];
}

const Index: React.FC<IndexProps> = ({ categoryList, productList }) => {
  return (
    <div>
      <Menu categoryList={categoryList} productList={productList} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const category = await axios.get<Category[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );
  const product = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );
  return {
    props: {
      categoryList: category.data ? category.data : [],
      productList: product.data ? product.data : [],
    },
  };
};

export default Index;
