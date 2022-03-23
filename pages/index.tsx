import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { ICharacter } from 'interfaces';
import { ReactNode, useEffect, useState } from 'react';
import { CartCharacter } from 'components/cart-character';
import { URL_API_CHARACTER } from 'utils/constants/api';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from 'query/characters';
interface IHomeProps {
  results: ICharacter[];
  children?: ReactNode;
}

const Home: NextPage<IHomeProps> = ({ results }) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  console.log(data);
  useEffect(() => {
  }, [data]);

  return (
    <section className={styles.list}>
      <Head>
        <title>{`Список всех персонажей`}</title>
      </Head>
      {loading ||
        results.map(({ id, name, image, gender, status, species, location }) => (
          <CartCharacter
            name={name}
            image={image}
            location={location}
            status={status}
            key={id}
            id={id}
            gender={gender}
            species={species}
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
