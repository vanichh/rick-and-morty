import Image from 'next/image';
import styles from './cart-character.module.scss';
import { ICharacterProps } from './cart-character.props';
import Link from 'next/link';
import { FC } from 'react';
import { statusTranslite, genderTranslite } from 'utils/translate';

export const CartCharacter: FC<ICharacterProps> = (props) => {
  const { name, image, gender, location, species, status, id } = props;

  return (
    <aside className={styles.item}>
      <Link href={`/character/${encodeURIComponent(id)}`}>
        <a className={styles['title-link']}>
          <h3 className={styles.title}>{name}</h3>
        </a>
      </Link>
      <div className={styles.item__wrapper}>
        <Image
          className={styles.item__img}
          src={image}
          alt={name}
          width={120}
          height={120}
        />
      </div>
      <div className={styles.item__wrapper}>
        <h3 className={styles['info-list__title']}>Информация</h3>
        <ul className={styles['info-list']}>
          <li>Статус: {statusTranslite(status)}</li>
          <li>
            Локация:{' '}
            <a className={styles['info-list__link']} href={location.name}>
              {location.name}
            </a>
          </li>
          <li>Пол: {genderTranslite(gender)}</li>
          <li>Вид: {species}</li>
        </ul>
      </div>
    </aside>
  );
};
