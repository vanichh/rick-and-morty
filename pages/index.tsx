/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { ICharacter } from 'interfaces';
import { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import { ListCharacters } from 'components/list-characters';
import { useSelector, useDispatch } from 'store/hooks';
import { throttle } from 'utils/optimization';
import { setCharast } from 'store/actions-type/charast';
import { useScroll } from 'hooks/use-scroll';
import { LoadingAnimation } from 'components/loading-animation';
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

export { getServerSideProps } from 'ssr/index-page';

export default Home;
