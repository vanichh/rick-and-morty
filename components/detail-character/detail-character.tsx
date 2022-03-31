import { ListEpisode } from 'components/list-episode';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IcharacterInfoProps } from './detail-character.props';
import style from './detail-character.module.scss';
import Head from 'next/head';

export const DetailCharacter: FC<IcharacterInfoProps> = ({ infoСharacter }) => {
  const { episode, gender, image, location, species, status, name } =
    infoСharacter;

  return (
    <section className={style.conteiner}>
      <Head>
        <title>{`Персонаж - ${name}`}</title>
      </Head>
      <h2 className={style.title}>{name}</h2>
      <section>
        <div>
          <Image src={image} alt={name} width={250} height={250} />
        </div>
        <p>
          Локация: <Link href={location.url}>{location.name}</Link>
        </p>
        <p>Вид: {species}</p>
        <p>Пол: {gender}</p>
      </section>
      <section>
        <div>
          <h4 className={style['title-episode']}>Снялся в эпизодах</h4>
          <ListEpisode episode={episode} />
        </div>
      </section>
    </section>
  );
};
