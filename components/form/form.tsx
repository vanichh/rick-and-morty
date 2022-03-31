import { FC, FormEvent } from 'react';
import styles from './form.module.scss';
import { IFormProps } from './form.props';

export const Form: FC<IFormProps> = ({ children, className, onSubmit }) => {
  const hadleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={className} onSubmit={hadleSubmit || onSubmit}>
      {children}
    </form>
  );
};
