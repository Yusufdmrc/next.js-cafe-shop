import styles from "../../styles/form/Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, ...inputsProps }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input type={type} required className={styles.input} {...inputsProps} />
        {type != "datetime-local" && (
          <span className={styles.span}>{placeholder}</span>
        )}
      </label>
    </div>
  );
};

export default Input;
