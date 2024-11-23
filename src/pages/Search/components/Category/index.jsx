import { SEARCH_CATEGORY } from '@constants';

import styles from './Category.module.css';

const CATEGORIES = Object.values(SEARCH_CATEGORY);

export default function Category({
  category: currentCategory,
  updateCategory,
}) {
  const isSelected = ({ value }) =>
    currentCategory.value === value ? styles.select : null;

  return (
    <ul className={styles.category}>
      {CATEGORIES.map((category) => (
        <li
          key={category.value}
          className={`${styles.menu} ${isSelected(category)}`}
          onClick={() => updateCategory(category)}
        >
          {category.label}
        </li>
      ))}
    </ul>
  );
}
