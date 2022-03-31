import { ChangeEvent, FC, useState } from 'react';
import { IInputProps } from './input-text.props';
import styles from './input-text.module.scss';

export const InputText: FC<IInputProps> = ({ value, onChange }) => {
  const [valueInput, setValueInput] = useState('');

  const changeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValueInput(target.value);
  };

  return <input onChange={onChange} className={styles.input} value={value} />;
};
