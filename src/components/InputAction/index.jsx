import styles from './InputAction.module.css';

export default function InputAction({
  name,
  value,
  updateValue,
  placeholder,
  onClick,
  buttonText,
}) {
  return (
    <label className={styles.container}>
      <input
        name={name}
        className={styles.input}
        type='text'
        value={value}
        onChange={updateValue}
        placeholder={placeholder}
      />
      <button className={styles.button} onClick={onClick}>
        {buttonText}
      </button>
    </label>
  );
}
