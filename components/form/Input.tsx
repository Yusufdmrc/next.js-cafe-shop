import styles from "../../styles/form/Input.module.css";

const Input: React.FC = () => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input type="text" required className={styles.input} />
        <span className={styles.span}>Email</span>
      </label>
    </div>
  );
};

export default Input;
