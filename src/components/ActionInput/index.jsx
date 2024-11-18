import styles from './ActionInput.module.css';

export default function ActionInput({
  value,
  setValue,
  buttonText,
  placeholder,
}) {
  const update = (event) => setValue(event.target.value);

  return (
    <label className={styles.container}>
      <input
        className={styles.input}
        type='text'
        value={value}
        onChange={update}
        placeholder={placeholder}
      />
      <button className={styles.button}>{buttonText}</button>
    </label>
  );
}
