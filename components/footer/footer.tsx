import styles from './footer.module.scss';

export const Footer = () => {
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
