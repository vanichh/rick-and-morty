import { URL_API_CHARACTER } from 'utils/constants/api';
import { ICharacter } from 'interfaces/character';
import { GetServerSideProps, NextPage } from 'next/types';
import { ReactNode } from 'react';
import { DetailCharacter } from 'components/detail-character';
import { Main } from 'layout/main';
import axios from 'axios';
import styles from './character.module.scss';

interface IcharacterInfoProps {
  infoСharacter: ICharacter;
  children?: ReactNode;
}

const characterInfo: NextPage<IcharacterInfoProps> = ({ infoСharacter }) => {
  return (
    <Main className={styles.main}>
      <DetailCharacter infoСharacter={infoСharacter} />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await axios.get(`${URL_API_CHARACTER}/${query.id}`);
  const infoСharacter = await response.data;

  return {
    props: { infoСharacter },
  };
};
export default characterInfo;
