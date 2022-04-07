/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { ICharacter } from 'interfaces';
import { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import { ListCharacters } from 'components/list-characters';
import { useSelector, useDispatch } from 'store/hooks';
import { setCharast } from 'store/actions-type/charast';
import { useScroll } from 'hooks/use-scroll';
import { LoadingAnimation } from 'components/loading-animation';
import { getCharast } from 'store/actions/charast';
import { Main } from 'layout/main';
interface IHomeProps {
  results: ICharacter[];
  children?: ReactNode;
}

const Home: NextPage<IHomeProps> = ({ results }) => {
  const dispatch = useDispatch();
  const { scroll, isLodingCroll, setIsLodingCroll } = useScroll(getCharast);
  const { isLoding, characters } = useSelector((store) => store.character);

  useEffect(() => {
    dispatch(setCharast(results));
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  useEffect(() => {
    if (isLoding) {
      setIsLodingCroll(true);
    }
  }, [isLoding]);

  return (
    <Main>
      <section className={styles.list}>
        <Head>
          <title>Список всех персонажей</title>
        </Head>
        <ListCharacters arrCharacter={characters} />
        {isLodingCroll && <LoadingAnimation />}
      </section>
    </Main>
  );
};

export { getServerSideProps } from 'ssr/index-page';

export default Home;
