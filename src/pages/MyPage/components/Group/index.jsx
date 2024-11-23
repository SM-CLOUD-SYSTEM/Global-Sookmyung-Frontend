import { Link } from 'react-router-dom';

import { ReactComponent as ForwardArrowIcon } from '@assets/forwardArrow.svg';

import styles from './Group.module.css';

export default function Group({ title, to, children }) {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {to && (
          <Link className={styles.to} to={to.path}>
            <span className={styles.label}>{to.label}</span>
            <ForwardArrowIcon />
          </Link>
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
