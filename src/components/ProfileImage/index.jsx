import { useState } from 'react';

import DefaultProfile from '@assets/profile.png';

import styles from './ProfileImage.module.css';

export default function ProfileImage({ profileUrl = DefaultProfile }) {
  const [src, setSrc] = useState(profileUrl);
  const onError = () => setSrc(DefaultProfile);

  return (
    <img
      className={styles.image}
      src={src}
      alt='default profile'
      onError={onError}
    />
  );
}
