import { URL_API_CHARACTER } from 'utils/constants/api';
import { ICharacter } from 'interfaces/character';
import { GetServerSideProps, NextPage } from 'next/types';
import { ReactNode } from 'react';
import { ListEpisode } from 'components/list-episode';
import Image from 'next/image';

interface IcharacterInfoProps {
  infoСharacter: ICharacter;
  children?: ReactNode;
}

const characterInfo: NextPage<IcharacterInfoProps> = ({ infoСharacter }) => {
  const { episode, gender, image, location, species, status, name } =
    infoСharacter;
  console.log(infoСharacter);
  return (
    <section>
      <div style={{width: 200}}><Image src={image}  alt={name} width={300}  height={300} /></div>
      <h2>{name}</h2>
      <p>Локация: {location.name}</p>
      <p>Вид: {species}</p>
      <ListEpisode episode={episode} />
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const response = await fetch(`${URL_API_CHARACTER}/${query.id}`);
  const infoСharacter = await response.json();

  return {
    props: { infoСharacter },
  };
};
export default characterInfo;
