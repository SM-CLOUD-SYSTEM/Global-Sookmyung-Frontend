import { useState } from 'react';

import Path from '@utils/Path.js';
import { ReactComponent as DownArrowIcon } from '@assets/downArrow.svg';

import styles from './Dropdown.module.css';

export default function Dropdown({ options = [], setValue, initial }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  const [currentOption, setCurrentOption] = useState(initial ?? options[0]);
  const updateOption = (event) => {
    const pathname = event.currentTarget.dataset.path;
    const board = Path.getBoard(pathname);

    setValue(board.id);
    setCurrentOption(board);
    setIsOpen(false);
  };

  const isSelected = (id) => (currentOption.id === id ? styles.select : null);

  return (
    <div className={`${styles.container} ${isOpen && styles.opend}`}>
      <div className={styles.display} onClick={toggle}>
        <div className={styles.wrapper}>
          <span className={styles.current}>{currentOption.name}</span>
          <DownArrowIcon
            className={styles.icon}
            fill={isOpen ? '#FF743D' : '#808593'}
          />
        </div>
      </div>
      <ul className={styles.options}>
        {options.map(({ id, path, name }) => (
          <li
            className={`${styles.option} ${isSelected(id)}`}
            key={id}
            data-path={path}
            onClick={updateOption}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
