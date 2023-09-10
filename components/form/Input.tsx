import styles from "../../styles/form/Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  type,
  error,
  touched,
  placeholder,
  ...inputsProps
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input
          type={type}
          required
          className={`touched && error ? ${styles.input2} : ${styles.input}`}
          {...inputsProps}
        />
        {type != "datetime-local" && (
          <span className={styles.span}>{placeholder}</span>
        )}
      </label>
      {touched && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Input;
