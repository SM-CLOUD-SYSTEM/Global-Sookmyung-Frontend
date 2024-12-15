import { ReactComponent as ArrowIndexOrange } from '@assets/arrowIndexOrange.svg';
import { ReactComponent as ArrowIndexGray } from '@assets/arrowIndexGray.svg';

import styles from './ArrowIndex.module.css';

const Arrow = ({ isSelected }) =>
  isSelected ? <ArrowIndexOrange /> : <ArrowIndexGray />;

export default function ArrowIndex({ label, isSelected = false }) {
  return (
    <div className={`${styles.container} ${isSelected && styles.select}`}>
      <Arrow isSelected={isSelected} />
      <span className={styles.label}>{label}</span>
    </div>
  );
}
