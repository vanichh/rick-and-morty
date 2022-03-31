import { ApolloError } from '@apollo/client';
import { ICharacter } from './character';

export interface IQueryChaster {
  loading: boolean;
  data:
    | undefined
    | {
        characters: {
          results: ICharacter[];
        };
      };
  error?: ApolloError;
}
