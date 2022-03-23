import Link from 'next/link';
import { FC } from 'react';
import { IListEpisodeProps } from './list-episode.props';
import styles from './list-episode.module.scss';

export const ListEpisode: FC<IListEpisodeProps> = ({ episode }) => {
  const arrNumEpisode = episode.map((item) => item.split('/').pop());

  return (
    <ul className={styles.list}>
      {arrNumEpisode.map((number) => (
        <li className={styles.item} key={number}>
          <Link href={`/episodes/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
