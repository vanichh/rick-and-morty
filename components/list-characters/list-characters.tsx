import { CartCharacter } from 'components/list-characters/cart-character';
import { FC } from 'react';
import { ICharactersProps } from './list-characters.props';

export const ListCharacters: FC<ICharactersProps> = ({ arrCharacter }) => {
  return (
    <>
      {arrCharacter.map(
        ({ id, name, image, gender, status, species, location }) => (
          <CartCharacter
            name={name}
            image={image}
            location={location}
            status={status}
            key={id}
            id={id}
            gender={gender}
            species={species}
          />
        )
      )}
    </>
  );
};
