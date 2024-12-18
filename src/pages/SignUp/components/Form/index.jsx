import { Input, InputAction } from '@components';

import styles from './Form.module.css';
import Dropdown from '../../../../components/Dropdown/index.jsx';

export function Legend({ children }) {
  return <h3 className={styles.legend}>{children}</h3>;
}

export function Form({ className, children, legend }) {
  return (
    <div className={className}>
      <Legend>{legend}</Legend>
      <div className={styles.form}>{children}</div>
    </div>
  );
}

export function Group({ children }) {
  return <div className={styles.group}>{children}</div>;
}

export function Label({ children, required }) {
  return (
    <label className={styles.label}>
      {children} {required && <span className={styles.required}>*</span>}
    </label>
  );
}

export function InputWithLabel({
  type,
  name,
  label,
  value,
  defaultValue,
  updateValue,
  placeholder,
  required = false,
  disabled,
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <Input
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        updateValue={updateValue}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
}

export function InputActionWithLabel({
  name,
  label,
  value,
  updateValue,
  placeholder,
  onClick,
  buttonText,
  required = false,
  disabled,
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <InputAction
        name={name}
        value={value}
        updateValue={updateValue}
        placeholder={placeholder}
        onClick={onClick}
        buttonText={buttonText}
        disabled={disabled}
      />
    </div>
  );
}

export function DropdownWithLabel({
  label,
  name,
  options,
  value,
  updateValue,
  required = false,
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <Dropdown
        name={name}
        options={options}
        value={value}
        updateValue={updateValue}
      />
    </div>
  );
}

export function InputWithDate({
  label,
  name,
  value,
  defaultValue,
  updateValue,
  clear,
  placeholder,
  icon,
  unit,
  disabled = false,
  required = false,
}) {
  return (
    <Input
      type='number'
      name={name}
      value={value}
      defaultValue={defaultValue}
      updateValue={updateValue}
      placeholder={placeholder}
      icon={icon}
      disabled={disabled}
      rightElement={<span className={styles.unit}>{unit}</span>}
    />
  );
}
