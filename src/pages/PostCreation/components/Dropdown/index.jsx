import { useState } from 'react';

import { ReactComponent as DownArrowIcon } from '@assets/downArrow.svg';

import styles from './Dropdown.module.css';

export default function Dropdown({
  boardName,
  options = [],
  setValue,
  initial,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  const updateOption = (event) => {
    const name = event.currentTarget.dataset.name;
    setValue(name);
    setIsOpen(false);
  };

  const isSelected = (option) => (option === boardName ? styles.select : null);

  return (
    <div className={`${styles.container} ${isOpen && styles.opend}`}>
      <div className={styles.display} onClick={toggle}>
        <div className={styles.wrapper}>
          <span className={styles.current}>{boardName}</span>
          <DownArrowIcon
            className={styles.icon}
            fill={isOpen ? '#FF743D' : '#808593'}
          />
        </div>
      </div>
      <ul className={styles.options}>
        {options.map((option) => (
          <li
            className={`${styles.option} ${isSelected(option)}`}
            key={option}
            data-name={option}
            onClick={updateOption}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
