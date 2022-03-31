import { FC } from 'react';
import { IInputSerchProps } from './input-submit.props';
import styles from './input-submit.module.scss';
import cn from 'classnames';

export const InputSubmit: FC<IInputSerchProps> = ({
  value = 'Отправить',
  onChange,
  className,
  disabled = false,
}) => {
  return (
    <input
      onChange={onChange}
      className={cn(styles.input, className)}
      value={value}
      type={'submit'}
      disabled={disabled}
    />
  );
};
