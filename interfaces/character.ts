export type TGender = 'Female' | 'Male' | 'Genderless' | 'unknown';
export type TStatus = 'Alive' | 'unknown' | 'Dead';

export interface ICharacter {
  created: string;
  episode: string[];
  gender: TGender;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: TStatus;
  type: string;
  url: string;
}
