import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import styles from "../../styles/layout/Footer.module.css";
import { MdLocationOn, MdPhone, MdMail } from "react-icons/md";
import axios from "axios";

const Footer = () => {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    const getFooter = async () => {
      try {
        const res = await axios.get(
          ` ${process.env.NEXT_PUBLIC_API_URL}/footer`
        );
        setFooter(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getFooter();
  });

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.container}>
          <div className={styles.contact}>
            <Title addClass={styles.contactTitle}>İletişime Geç</Title>
            <div className={styles.contactContainer}>
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <MdLocationOn />
                <span className={styles.contactSpan}>Konum</span>
              </a>
              <a href={`tel:${footer?.phoneNumber}`}>
                <MdPhone />
                <span className={styles.contactSpan}>
                  {footer?.phoneNumber}
                </span>
              </a>
              <a href={`mailto:${footer?.email}`}>
                <MdMail />
                <span className={styles.contactSpan}>maxcafe@gmail.com</span>
              </a>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <Title>MaxCafe</Title>
            <p className={styles.socialP}>{footer?.desc}</p>
            <div className={styles.socialIcons}>
              {footer?.socialMedia?.map((item) => (
                <a
                  className={styles.socialIconsA}
                  href={item?.link}
                  key={item._id}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className={styles.hoursContainer}>
            <Title>Açık Saatler</Title>
            <div className={styles.dayHour}>
              <div>
                <span className={styles.day}>{footer?.openingHours?.day}</span>
              </div>
              <div>
                <span className={styles.hour}>
                  {footer?.openingHours?.hour}
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.footerYear}>@2023</p>
      </div>
    </div>
  );
};

export default Footer;
