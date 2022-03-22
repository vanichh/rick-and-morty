import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { ICharacter } from 'interfaces';
import { ReactNode } from 'react';
import { CartCharacter } from 'components/cart-character';
import { URL_API_CHARACTER } from 'utils/constants/api';
interface IHomeProps {
  results: ICharacter[];
  children?: ReactNode;
}

const Home: NextPage<IHomeProps> = ({ results }) => {
  return (
    <section className={styles.list}>
      {results.map(({ id, name, image, gender, status, location }) => (
        <CartCharacter
          name={name}
          image={image}
          location={location}
          status={status}
          key={id}
          id={id}
          gender={gender}
        />
      ))}
    </section>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(URL_API_CHARACTER);
  const { results } = await response.json();
  return {
    props: {
      results,
    },
  };
};

export default Home;
