import { ChangeEvent, FC, useState } from 'react';
import { IInputSerchProps } from './input-search.props';
import styles from './input-search.module.scss';
import cn from 'classnames';

export const InputSearch: FC<IInputSerchProps> = ({
  value,
  onChange,
  className,
}) => {
  const [valueInput, setValueInput] = useState<string>('');

  const changeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValueInput(target.value);
  };

  return (
    <input
      onChange={onChange || changeHandler}
      className={cn(styles.input, className)}
      value={value || valueInput}
      type={'search'}
    />
  );
};
