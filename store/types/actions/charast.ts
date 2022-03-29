import {
  SET_CHARASTERS,
  START_LODING_CHARASTERS,
  END_LODING_CHARASTERS,
} from 'store/constants';
import { ICharacter } from 'interfaces';
interface ISetCharaster  {
  readonly type: typeof SET_CHARASTERS;
  readonly payload: ICharacter[];
}
interface IStartLodingCharacter  {
  readonly type: typeof START_LODING_CHARASTERS;
}
interface IEndLodingCharacter  {
  readonly type: typeof END_LODING_CHARASTERS;
}

export type TCharastActions =
  | ISetCharaster
  | IStartLodingCharacter
  | IEndLodingCharacter;
