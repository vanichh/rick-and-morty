import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { ICharacter } from 'interfaces';
import { ReactNode, useEffect, useState } from 'react';
import { URL_API_GRAPHQL } from 'utils/constants/api';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS, GET_INIT_CHARACTERS } from 'query/characters';
import { IQueryChaster } from 'interfaces/query-chaster';
import { ListCharacters } from 'components/list-characters';
import { useSelector } from 'store/hooks';
import { throttleEndPageCheck } from 'utils/helps';
import { useScroll } from 'hooks/use-scroll';
interface IHomeProps {
  results: ICharacter[];
  children?: ReactNode;
}

const Home: NextPage<IHomeProps> = ({ results }) => {
  const [listCharacter, SetlistCharacter] = useState(results);

  const { counterPage } = useSelector((store) => store.character);
  const { loading, data } = useQuery<IQueryChaster>(GET_CHARACTERS, {
    variables: { id: counterPage },
  });

  useScroll();

  useEffect(() => {}, []);

  return (
    <section className={styles.list}>
      <Head>
        <title>Список всех персонажей</title>
      </Head>
      <ListCharacters arrCharacter={listCharacter} />
    </section>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(URL_API_GRAPHQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(GET_INIT_CHARACTERS),
  });

  const { data } = await response.json();

  return {
    props: {
      results: data.characters.results,
    },
  };
};

export default Home;
