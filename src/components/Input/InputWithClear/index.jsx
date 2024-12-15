import { INPUT_ICON } from '@constants';

import { Input } from '@components';

import { ReactComponent as Clear } from '@assets/Input/cancel.svg';
import { ReactComponent as Key } from '@assets/Input/key.svg';
import { ReactComponent as Person } from '@assets/Input/person.svg';

import styles from './InputWithClear.module.css';

export default function InputWithClear({
  name,
  value,
  defaultValue,
  updateValue,
  clear,
  placeholder,
  icon,
  rightElement,
  disabled = false,
}) {
  return (
    <Input
      name={name}
      value={value}
      defaultValue={defaultValue}
      updateValue={updateValue}
      placeholder={placeholder}
      icon={icon}
      disabled={disabled}
      rightElement={<Clear className={styles.cancel} onClick={clear} />}
    />
  );
}
