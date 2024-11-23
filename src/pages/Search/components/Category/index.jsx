import { SEARCH_CATEGORY } from '@constants';

import styles from './Category.module.css';

const CATEGORIES = Object.values(SEARCH_CATEGORY);

export default function Category({ category, updateCategory }) {
  const isSelected = (value) => (category === value ? styles.select : null);

  return (
    <ul className={styles.category}>
      {CATEGORIES.map(({ label, value }) => (
        <li
          key={value}
          className={`${styles.menu} ${isSelected(value)}`}
          onClick={() => updateCategory(value)}
        >
          {label}
        </li>
      ))}
    </ul>
  );
}
