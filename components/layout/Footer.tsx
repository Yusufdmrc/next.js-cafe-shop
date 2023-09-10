import React from "react";
import Title from "../ui/Title";
import styles from "../../styles/layout/Footer.module.css";
import { MdLocationOn, MdPhone, MdMail } from "react-icons/md";
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.container}>
          <div className={styles.contact}>
            <Title addClass={styles.contactTitle}>İletişime Geç</Title>
            <div className={styles.contactContainer}>
              <div>
                <MdLocationOn />
                <span className={styles.contactSpan}>Konum</span>
              </div>
              <div>
                <MdPhone />
                <span className={styles.contactSpan}>041272172386</span>
              </div>
              <div>
                <MdMail />
                <span className={styles.contactSpan}>maxcafe@gmail.com</span>
              </div>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <Title>MaxCafe</Title>
            <p className={styles.socialP}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              excepturi quibusdam consequuntur amet iusto totam.
            </p>
            <div className={styles.socialIcons}>
              <a className={styles.socialIconsA} href="">
                <FaTwitter />
              </a>
              <a className={styles.socialIconsA} href="">
                <FaInstagram />
              </a>
              <a className={styles.socialIconsA} href="">
                <FaLinkedin />
              </a>
              <a className={styles.socialIconsA} href="">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className={styles.hoursContainer}>
            <Title>Açık Saatler</Title>
            <div className={styles.dayHour}>
              <div>
                <span className={styles.day}>Her gün</span>
              </div>
              <div>
                <span className={styles.hour}>10:00 - 22:00</span>
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
