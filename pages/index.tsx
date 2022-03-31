/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { ICharacter } from 'interfaces';
import { ReactNode, useEffect } from 'react';
import { URL_API_GRAPHQL } from 'utils/constants/api';
import Head from 'next/head';
import { ListCharacters } from 'components/list-characters';
import { useSelector, useDispatch } from 'store/hooks';
import { throttle } from 'utils/optimization';
import { GET_INIT_CHARACTERS } from 'query/characters';
import { setCharast } from 'store/actions-type/charast';
import { useScroll } from 'hooks/use-scroll';
import { LoadingAnimation } from 'components/loading-animation';
import { request, checkResponse } from 'utils/api';
import { getCharast } from 'store/actions/charast';
interface IHomeProps {
  results: ICharacter[];
  children?: ReactNode;
}

const Home: NextPage<IHomeProps> = ({ results }) => {
  const dispatch = useDispatch();
  const scrollElem = useScroll(getCharast);
  const throttleScroll = throttle(scrollElem, 250);
  const { isLoding, characters } = useSelector((store) => store.character);

  useEffect(() => {
    dispatch(setCharast(results));
    window.addEventListener('scroll', throttleScroll);
    return () => window.removeEventListener('scroll', throttleScroll);
  }, []);

  return (
    <section className={styles.list}>
      <Head>
        <title>Список всех персонажей</title>
      </Head>
      <ListCharacters arrCharacter={characters} />
      {isLoding && <LoadingAnimation />}
    </section>
  );
};

export const getServerSideProps = async () => {
  const response = await request({
    url: URL_API_GRAPHQL,
    body: GET_INIT_CHARACTERS(1),
    method: 'POST',
  });
  const { data } = await checkResponse(response);
  return {
    props: {
      results: data.characters.results,
    },
  };
};

export default Home;
