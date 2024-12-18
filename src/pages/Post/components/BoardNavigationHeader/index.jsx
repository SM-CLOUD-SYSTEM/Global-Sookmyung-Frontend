import { useNavigate } from 'react-router-dom';

import { ReactComponent as BackIcon } from '@assets/backArrow.svg';

import styles from './BoardNavigationHeader.module.css';

const UNIV = 'Sookmyung Women’s Univ.';

export default function BoardNavigationHeader() {
  const navigate = useNavigate();
  const back = () => navigate(-1);

  return (
    <div className={styles.container} onClick={back}>
      <div className={styles.navigator}>
        <BackIcon width={14} height={14} />
        <span className={styles.name}>
          {UNIV} {name}
        </span>
      </div>
    </div>
  );
}
