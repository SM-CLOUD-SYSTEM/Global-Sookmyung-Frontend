import { useState } from 'react';

import { ReactComponent as DownArrowIcon } from '@assets/downArrow.svg';

import styles from './Dropdown.module.css';

export default function Dropdown({ name, options = [], value, updateValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  const updateOption = (event) => {
    const value = event.currentTarget.dataset.value;

    updateValue({ target: { name, value } });
    setIsOpen(false);
  };

  const isSelected = (option) => (value === option ? styles.select : null);

  return (
    <label htmlFor=''>
      <div className={`${styles.container} ${isOpen && styles.opend}`}>
        <div className={styles.display} onClick={toggle}>
          <div className={styles.wrapper}>
            <span className={styles.current}>{value || options[0]}</span>
            <DownArrowIcon
              className={styles.icon}
              fill={isOpen ? '#FF743D' : '#808593'}
            />
          </div>
        </div>
        <ul className={styles.options}>
          {options.map((option) => (
            <option
              className={`${styles.option} ${isSelected(option)}`}
              key={option}
              data-value={option}
              onClick={updateOption}
            >
              {option}
            </option>
          ))}
        </ul>
      </div>
    </label>
  );
}
