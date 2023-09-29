import Menu from "@/components/menu/Menu";
import axios from "axios";
import React from "react";

interface Category {
  _id: string;
  title: string;
}

const Index = ({ categoryList }) => {
  return (
    <div>
      <Menu categoryList={categoryList} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get<Category[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );
  return {
    props: {
      categoryList: res.data ? res.data : [],
    },
  };
};

export default Index;
