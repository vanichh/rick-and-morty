import { FC } from 'react';
import styles from './header.module.css';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Информация по вселеной{' '}
          <span className={styles['title--color']}>Rick and Morty</span>
        </h1>
        <form className={styles.form}>
          <input className={styles['form__input-search']} type='search' />
          <input type='submit' />
        </form>
      </div>
    </header>
  );
};
