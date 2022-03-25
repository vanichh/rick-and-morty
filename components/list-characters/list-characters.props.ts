import { ICharacter } from 'interfaces';
import { ReactNode } from 'react';
export interface ICharactersProps {
  arrCharacter: ICharacter[];
  children?: ReactNode;
}
