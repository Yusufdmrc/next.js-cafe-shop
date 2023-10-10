import Image from "next/image";
import styles from "./basket.module.css";
import Title from "@/components/ui/Title";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "@/redux/basketSlice";
import { RootState } from "@/redux/store"; // Özgün bir RootState türünü içe aktarın
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Basket: React.FC = ({ userList }) => {
  const { data: session } = useSession();
  const basket = useSelector((state: RootState) => state.basket);
  const dispatch = useDispatch(); //
  const user = userList?.find((user) => user.email === session?.user?.email);
  const router = useRouter();

  const newOrder = {
    customer: user?.name,
    address: user?.address ? user?.address : "No address",
    total: basket.total,
    method: 0,
  };

  const createOrder = async () => {
    try {
      if (session) {
        if (confirm("Siparişi tamamlamak istiyor musun? ")) {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/orders`,
            newOrder
          );
          if (res.status === 201) {
            router.push(`/order/${res.data._id}`);
            dispatch(reset());
            toast.success("Sipariş başarıyla oluşturuldu", {
              autoClose: 1000,
            });
          }
        }
      } else {
        toast.error("Lütfen öncelikle giriş yapınız", {
          autoClose: 1000,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.basketLeft}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th} scope="col">
                  Ürün
                </th>
                <th className={styles.th} scope="col">
                  Ekstralar
                </th>
                <th className={styles.th} scope="col">
                  Fiyat
                </th>
                <th className={styles.th} scope="col">
                  Adet
                </th>
              </tr>
            </thead>
            <tbody>
              {basket.products.map((product, index) => (
                <tr key={index} className={styles.imageTr}>
                  <td className={styles.imageTd}>
                    <Image
                      src={product?.img}
                      width={50}
                      height={50}
                      alt="image"
                      priority
                    />
                    <span>{product.name}</span>
                  </td>
                  <td className={styles.extras}>
                    {product.extras.map((item) => (
                      <span key={item.id}>{item.text}</span>
                    ))}
                  </td>
                  <td className={styles.price}>{product.price}TL</td>
                  <td className={styles.amount}>{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.basketRight}>
          <Title>SEPET TOPLAMI</Title>
          <div className={styles.basketPrice}>
            <b>Ara Toplam:</b>${basket.total}TL
            <br />
            <b className={styles.discount}>İndirim:</b>0.00TL <br />
            <b>Toplam:</b>${basket.total}
          </div>
          <button className="button" onClick={createOrder}>
            Şimdi Öde
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);

  return {
    props: {
      userList: res.data ? res.data : [],
    },
  };
};

export default Basket;
