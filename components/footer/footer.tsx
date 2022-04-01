import { FC } from 'react';
import styles from './footer.module.scss';
import { IFooterProps } from './footer.props';

export const Footer: FC<IFooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <p>
        API с сайта{' '}
        <a target={'_blank'} href='https://rickandmortyapi.com/'>
          rickandmortyapi
        </a>
      </p>
    </footer>
  );
};
