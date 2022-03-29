import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { ICharacter } from 'interfaces';
import { ReactNode, useEffect, useState } from 'react';
import { URL_API_GRAPHQL } from 'utils/constants/api';
import Head from 'next/head';
import { ListCharacters } from 'components/list-characters';
import { useSelector, useDispatch } from 'store/hooks';
import { throttle } from 'utils/optimization';
import { getCharast } from 'store/actions/charast';
import { GET_INIT_CHARACTERS } from 'query/characters';
interface IHomeProps {
  results: ICharacter[];
  children?: ReactNode;
}

const HEIGHT_LOADING = 200;
let flag = true;

const Home: NextPage<IHomeProps> = ({ results }) => {
  const dispatch = useDispatch();
  const [listCharacter, SetlistCharacter] = useState(results);
  const { isLoding, characters } = useSelector((store) => store.character);
  console.log(characters)
  const scroll = () => {
    if (flag) {
      const heightPage = document.documentElement.clientHeight;
      const MaxFullHeightPage = document.documentElement.scrollHeight;
      const scrollPage = MaxFullHeightPage - heightPage - window.pageYOffset;

      if (scrollPage < HEIGHT_LOADING) {
        flag = false;
        dispatch(getCharast());
        setTimeout(() => {
          flag = true;
        }, 3000);
      }
    }
  };

  const throttleScroll = throttle(scroll, 250);
  useEffect(() => {
    window.addEventListener('scroll', throttleScroll);
    return () => window.removeEventListener('scroll', throttleScroll);
  }, []);

  // useEffect(() => {
  //   if (characters.length !== 0) {
  //     console.log('characters',characters)
  //     SetlistCharacter(characters);
  //   }
  // }, [characters]);

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
    body: JSON.stringify(GET_INIT_CHARACTERS(1)),
  });

  const { data } = await response.json();
  return {
    props: {
      results: data.characters.results,
    },
  };
};

export default Home;
