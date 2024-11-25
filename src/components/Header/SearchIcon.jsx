import { Link } from 'react-router-dom';

import { PATH } from '@constants';
import { ReactComponent as Search } from '@assets/Header/search.svg';

import styles from './SearchIcon.module.css';

export default function SearchIcon() {
  return (
    <Link className={styles.icon} to={PATH.search}>
      <Search />
    </Link>
  );
}
