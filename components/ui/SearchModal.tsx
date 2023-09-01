import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import styles from "../../styles/ui/SearchModal.module.css";
import Image from "next/image";
import { RiCloseCircleFill } from "react-icons/ri";

interface SearchModalProps {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  isModal: boolean;
}

const SearchModal: React.FC<SearchModalProps> = ({ setIsModal, isModal }) => {
  return (
    <div className={styles.searchModal}>
      <OutsideClickHandler onOutsideClick={() => setIsModal(!isModal)}>
        <div className={styles.grid}>
          <div className={styles.searchTitle}>
            <Title addClass={styles.hidden}>Search</Title>
            <input
              type="text"
              placeholder="Arayın..."
              className={styles.input}
            />
            <div>
              <ul>
                <li className={styles.searchContainer}>
                  <div className={styles.searchImage}>
                    <Image
                      width={48}
                      height={48}
                      src="/images/campaign.jpg"
                      alt=""
                    />
                  </div>
                  <span className={styles.span}>Donut</span>
                  <span className={styles.span}>$10</span>
                </li>
                <li className={styles.searchContainer}>
                  <div className={styles.searchImage}>
                    <Image
                      width={48}
                      height={48}
                      src="/images/campaign.jpg"
                      alt=""
                    />
                  </div>
                  <span className={styles.span}>Donut</span>
                  <span className={styles.span}>$10</span>
                </li>
                <li className={styles.searchContainer}>
                  <div className={styles.searchImage}>
                    <Image
                      width={48}
                      height={48}
                      src="/images/campaign.jpg"
                      alt=""
                    />
                  </div>
                  <span className={styles.span}>Donut</span>
                  <span className={styles.span}>$10</span>
                </li>
              </ul>
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
