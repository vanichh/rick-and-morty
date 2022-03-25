import { ReactNode } from 'react';
import type { TGender, TStatus } from 'interfaces/character';

export interface ICharacterProps {
  name: string;
  id: number;
  image: string;
  title?: string;
  children?: ReactNode;
  gender: TGender;
  species?: string;
  status: TStatus;
  location: {
    name: string;
    url: string;
  };
}
