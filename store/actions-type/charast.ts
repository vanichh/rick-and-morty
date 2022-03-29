import {
  INIT_CHARASTERS,
  START_LODING_CHARASTERS,
  SET_CHARASTERS,
} from 'store/constants';
import { ICharacter } from 'interfaces/character';
import { TCharastActions } from 'store/types/actions/charast';

export const startLoding = (): TCharastActions => ({
  type: START_LODING_CHARASTERS,
});

export const setCharast = (payload: ICharacter[]): TCharastActions => ({
  type: SET_CHARASTERS,
  payload,
});
